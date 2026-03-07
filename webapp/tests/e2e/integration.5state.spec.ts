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

test.describe('Integration — 5-State Offline (Gate 5.4)', () => {
  test('offline banner appears when browser goes offline and disappears when back online', async ({ page, context }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    // Bypass onboarding
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();
    await page.evaluate(([key, payload]) => {
      localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    // Navigate to home (inside AppLayout)
    await page.goto('/');
    await waitForReactMount(page);

    // Banner should NOT be visible when online
    const banner = page.locator('[role="status"]').filter({ hasText: 'Sin conexión' });
    await expect(banner).not.toBeVisible();

    // Simulate going offline (real Playwright browser emulation)
    await context.setOffline(true);

    // Dispatch offline event since Playwright setOffline may not fire it in all cases
    await page.evaluate(() => window.dispatchEvent(new Event('offline')));

    // Banner SHOULD appear
    await expect(banner).toBeVisible({ timeout: 5_000 });

    // Verify banner content per UI-STP-005
    await expect(banner).toContainText('Sin conexión a internet');
    await expect(banner).toContainText('Puedes seguir usando las funciones disponibles');

    // Simulate going back online
    await context.setOffline(false);
    await page.evaluate(() => window.dispatchEvent(new Event('online')));

    // Banner should disappear
    await expect(banner).not.toBeVisible({ timeout: 5_000 });

    // Zero JS errors
    expect(pageErrors, 'pageerror should be empty').toEqual([]);
    expect(consoleErrors, 'console.error should be empty').toEqual([]);
  });
});
