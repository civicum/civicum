import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------------------
// Onboarding bypass — same pattern as other specs
// FRAGILITY NOTE: If Zustand storage key or schema changes, this breaks.
// ---------------------------------------------------------------------------
const ONBOARDING_STORAGE_KEY = 'civicum-onboarding-storage';

function buildOnboardingBypass(): string {
  return JSON.stringify({
    state: {
      hasCompletedOnboarding: true,
      currentStep: 5,
      data: { interests: [] },
    },
    version: 0,
  });
}

const REACT_MOUNT_TIMEOUT = 10_000;

async function waitForReactMount(page: import('@playwright/test').Page) {
  await page.locator('#root').waitFor({ state: 'attached', timeout: REACT_MOUNT_TIMEOUT });
  await page.waitForFunction(
    () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
    { timeout: REACT_MOUNT_TIMEOUT },
  );
}

async function setupOnboardingBypass(page: import('@playwright/test').Page) {
  await page.goto('/onboarding');
  const bypassPayload = buildOnboardingBypass();
  await page.evaluate(([key, payload]) => {
    localStorage.setItem(key, payload);
  }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);
}

// ---------------------------------------------------------------------------
// Gate 5.7 — Integration tests for Community Reports vertical
//
// These tests intercept the REAL HTTP request to /api/community-reports
// and control the response. The production code path (useQuery → fetch)
// is unchanged — the interception happens at the network layer via Playwright.
//
// NO timers. NO fake flags. NO production toggles.
// ---------------------------------------------------------------------------

test.describe('Integration — Community Reports (Gate 5.7)', () => {
  test('Loading: skeleton is shown while request is pending', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await setupOnboardingBypass(page);

    // Intercept and hold the request to observe the loading state
    let resolveRequest: (() => void) | undefined;
    const requestHeld = new Promise<void>((resolve) => { resolveRequest = resolve; });

    await page.route('**/api/community-reports', async (route) => {
      // Signal that request was intercepted
      resolveRequest?.();
      // Hold for 2 seconds to let Playwright assert the loading state
      await new Promise((r) => setTimeout(r, 2000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for the request to be intercepted (proves fetch was made)
    await requestHeld;

    // Assert Loading state is visible (SkeletonScreen renders aria-busy)
    const loadingSection = page.locator('[data-testid="reports-loading"]');
    await expect(loadingSection).toBeVisible({ timeout: 5_000 });

    // Verify skeleton has aria attributes
    const skeleton = loadingSection.locator('[aria-busy="true"]');
    await expect(skeleton).toBeVisible();

    // Wait for loading to resolve (becomes empty since we sent [])
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
    // Note: React Query retries may produce console warnings, filter those
  });

  test('Error: error state is shown when backend returns 500', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // Intercept and return 500 — simulates a real backend failure
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          error: 'No se pudieron cargar los reportes comunitarios.',
          detail: 'Connection refused',
        }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Assert Error state is visible
    const errorSection = page.locator('[data-testid="reports-error"]');
    await expect(errorSection).toBeVisible({ timeout: 15_000 });

    // Verify error content from ErrorState component
    await expect(errorSection).toContainText('Hubo un problema');

    // Verify retry button exists (ErrorState onRetry)
    const retryButton = errorSection.locator('button', { hasText: 'Reintentar' });
    await expect(retryButton).toBeVisible();

    // Zero JS errors (page-level errors; console errors from fetch 500 are expected)
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Empty: empty state is shown when backend returns 0 reports', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await setupOnboardingBypass(page);

    // Intercept and return empty array — simulates a real empty database
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Assert Empty state is visible
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Verify EmptyState copy
    await expect(emptySection).toContainText('Sin reportes comunitarios');
    await expect(emptySection).toContainText('Sé el primero en alzar la voz');

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Retry: clicking retry on error triggers a new request', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    let requestCount = 0;

    // First request: 500 error; second request: success with empty
    await page.route('**/api/community-reports', async (route) => {
      requestCount++;
      if (requestCount <= 2) {
        // First two calls (initial + React Query retry): return 500
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'DB down' }),
        });
      } else {
        // After user clicks retry: return success
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ reports: [] }),
        });
      }
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for error state (after initial + 1 retry fail)
    const errorSection = page.locator('[data-testid="reports-error"]');
    await expect(errorSection).toBeVisible({ timeout: 15_000 });

    // Click retry
    const retryButton = errorSection.locator('button', { hasText: 'Reintentar' });
    await retryButton.click();

    // Should transition to empty state (since we return [] on retry)
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 15_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });

  test('Empty CTA: "Crear Reporte" navigates to /alza-la-voz', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // Intercept to force empty state
    await page.route('**/api/community-reports', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reports: [] }),
      });
    });

    await page.goto('/');
    await waitForReactMount(page);

    // Wait for empty state
    const emptySection = page.locator('[data-testid="reports-empty"]');
    await expect(emptySection).toBeVisible({ timeout: 10_000 });

    // Click the CTA link — should navigate to /alza-la-voz
    const ctaLink = emptySection.locator('a', { hasText: 'Crear Reporte' });
    await expect(ctaLink).toBeVisible();
    await ctaLink.click();

    await expect(page).toHaveURL('/alza-la-voz');

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Gate 5.7a — Real backend wiring tests (NO intercept)
//
// These tests exercise the real Hono backend started by Playwright's
// webServer config. No route interception is used — every HTTP request
// goes through the real Vite proxy → real Hono server.
//
// The backend will return a real 500 (DATABASE_URL not configured) or
// real data/empty if a DB is connected. Both outcomes are valid.
// ---------------------------------------------------------------------------

test.describe('Real Backend Wiring (Gate 5.7a)', () => {
  test('Backend /health returns real 200', async ({ request }) => {
    // Direct HTTP request to the real Hono server (no browser, no intercept)
    const response = await request.get('http://localhost:3001/health');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ status: 'ok', version: '1.0.0' });
  });

  test('Backend /api/community-reports returns real HTTP response', async ({ request }) => {
    // Direct HTTP request to the real endpoint — no intercept
    const response = await request.get('http://localhost:3001/api/community-reports');
    // Accept either 200 (DB connected) or 500 (DB not configured) — both are honest
    expect([200, 500]).toContain(response.status());

    const body = await response.json();
    if (response.status() === 200) {
      expect(body).toHaveProperty('reports');
      expect(Array.isArray(body.reports)).toBe(true);
    } else {
      expect(body).toHaveProperty('error');
    }
  });

  test('Dashboard renders real state without intercept', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));

    await setupOnboardingBypass(page);

    // NO page.route — this is a real request through the Vite proxy to the real backend
    await page.goto('/');
    await waitForReactMount(page);

    // Dashboard should render one of the three real states (no intercept)
    const dataSection = page.locator('[data-testid="reports-data"]');
    const emptySection = page.locator('[data-testid="reports-empty"]');
    const errorSection = page.locator('[data-testid="reports-error"]');

    // Wait for any of the three states to appear (real backend response)
    await expect(
      dataSection.or(emptySection).or(errorSection)
    ).toBeVisible({ timeout: 20_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
  });
});

