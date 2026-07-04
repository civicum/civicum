import { test, expect } from '@playwright/test';

/**
 * Breakpoint Smoke Tests — SSOT UI-LAY-004 Verification
 *
 * Validates the SSOT layout contract for navigation behavior across viewports.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │ UI-LAY-004 (MUST): Smart Dock: bottom bar XS-MD, side rail LG+    │
 * │ DOCREF: S01 → §6.3 → fila Smart Dock (L635)                      │
 * │ SOURCE: docs-ui/traceability_matrix.md (line 65)                  │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Invariants under test (derived from UI-LAY-004):
 *   - 360px (XS): Smart Dock visible as bottom bar
 *   - 480px (SM): Smart Dock visible as bottom bar
 *   - 768px (MD): Smart Dock visible as bottom bar
 *   - 1024px (LG): Side rail visible as vertical navigation
 *   - All viewports: zero JS errors (pageerror + console.error)
 *
 * DOCREF: ADR-0003 (ACCEPTED, Opción B) — Verificación §63-67
 * DOCREF: docs-ui/03_LAYOUTS.md — Breakpoints oficiales §20-33
 */

// ---------------------------------------------------------------------------
// Selectors — stable data-testid selectors (Gate 5.9a)
// ---------------------------------------------------------------------------
const SMART_DOCK = '[data-testid="smart-dock"]';
const SIDE_RAIL = '[data-testid="side-rail"]';

// ---------------------------------------------------------------------------
// Onboarding bypass fixture — FRAGILE INTERNAL FIXTURE
//
// Directly injects Zustand persisted state to skip onboarding.
// NOT a contract — mirrors internal schema of useOnboardingStore.ts.
//
// If this breaks (onboarding shows instead of dashboard), check:
//   1. Key rename: grep for 'civicum-onboarding-storage' in src/store/
//   2. Schema change: compare with useOnboardingStore.ts state shape
//   3. Zustand version: check if persist version changed from 0
//
// DOCREF: webapp/src/store/useOnboardingStore.ts
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

// ---------------------------------------------------------------------------
// Helper: dual-wait for React mount (route-independent)
// ---------------------------------------------------------------------------
const REACT_MOUNT_TIMEOUT = 10_000;

async function waitForReactMount(page: import('@playwright/test').Page) {
    await page.locator('#root').waitFor({ state: 'attached', timeout: REACT_MOUNT_TIMEOUT });

    await page.waitForFunction(
        () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
        { timeout: REACT_MOUNT_TIMEOUT },
    ).catch(() => {
        throw new Error(
            `waitForReactMount: #root has no children after ${REACT_MOUNT_TIMEOUT}ms. ` +
            'Possible causes: onboarding bypass fixture broken (check ONBOARDING_STORAGE_KEY / schema), ' +
            'route renders nothing (404 GAP), or JS error prevented mount.'
        );
    });
}

// ---------------------------------------------------------------------------
// Helper: setup error listeners, bypass onboarding, navigate to dashboard
// ---------------------------------------------------------------------------
async function setupPage(page: import('@playwright/test').Page, width: number, height: number) {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

    await page.setViewportSize({ width, height });

    // Stub /api/community-reports so proxy errors don't pollute console.error
    await page.route('**/api/community-reports', (route) =>
        route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
    );

    // Inject onboarding bypass fixture
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();
    await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    await page.goto('/');
    await waitForReactMount(page);

    return { pageErrors, consoleErrors };
}

// ---------------------------------------------------------------------------
// Tests — SSOT UI-LAY-004
// ---------------------------------------------------------------------------
test.describe('Breakpoint Smoke — SSOT UI-LAY-004', () => {

    // ── XS = 360px ─────────────────────────────────────────────────────
    // UI-LAY-004: "bottom bar XS-MD" → dock visible at XS ✅
    test('360px (XS): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 360, 800);

        const dock = page.locator(SMART_DOCK);
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at XS (360px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 360px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 360px').toEqual([]);
    });

    // ── SM = 480px ─────────────────────────────────────────────────────
    // UI-LAY-004: "bottom bar XS-MD" → dock visible at SM ✅
    test('480px (SM): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 480, 800);

        const dock = page.locator(SMART_DOCK);
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at SM (480px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 480px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 480px').toEqual([]);
    });

    // ── MD = 768px ─────────────────────────────────────────────────────
    // UI-LAY-004: "bottom bar XS-MD" → dock visible at MD ✅
    // Gate 5.9a: md:hidden → lg:hidden fix — this test now passes.
    test('768px (MD): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 768, 900);

        const dock = page.locator(SMART_DOCK);
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at MD (768px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 768px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 768px').toEqual([]);
    });

    // ── LG = 1024px ────────────────────────────────────────────────────
    // UI-LAY-004: "side rail LG+" → side rail visible at LG ✅
    // Gate 5.9a: SideRail component implemented.
    test('1024px (LG): Side rail visible, Smart Dock hidden, zero overflow, no JS errors', async ({ page }, testInfo) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 1024, 900);

        // Assert side rail exists at LG
        await expect(page.locator(SIDE_RAIL), 'UI-LAY-004: side rail should be visible at LG (1024px)').toBeVisible();

        // Assert Smart Dock is hidden at LG (lg:hidden)
        await expect(page.locator(SMART_DOCK), 'UI-LAY-004: Smart Dock should be hidden at LG').toBeHidden();

        // Assert zero horizontal overflow — geometry proof, no overflow-x-hidden mask
        const hasOverflow = await page.evaluate(() => {
            const doc = document.documentElement;
            return doc.scrollWidth > doc.clientWidth;
        });
        expect(hasOverflow, 'Zero horizontal overflow at 1024px (scrollWidth <= clientWidth)').toBe(false);

        // Screenshot evidence for audit trail
        const screenshotPath = testInfo.outputPath('lg-1024-no-overflow.png');
        await page.screenshot({ path: screenshotPath, fullPage: true });
        testInfo.attachments.push({ name: 'lg-1024-no-overflow', path: screenshotPath, contentType: 'image/png' });

        expect(pageErrors, 'pageerror should be empty at 1024px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 1024px').toEqual([]);
    });


    // ── JS-only checks at all ADR-0003 breakpoints ─────────────────────
    // These ensure no viewport causes crashes, independent of layout assertions.
    test('All breakpoints: no JS errors at 360/480/768/1024', async ({ page }) => {
        const allErrors: string[] = [];

        for (const [label, w, h] of [
            ['XS(360)', 360, 800],
            ['SM(480)', 480, 800],
            ['MD(768)', 768, 900],
            ['LG(1024)', 1024, 900],
        ] as const) {
            const pageErrors: Error[] = [];
            const onPageError = (e: Error) => pageErrors.push(e);
            const consoleErrors: string[] = [];
            const onConsole = (msg: import('@playwright/test').ConsoleMessage) => {
                if (msg.type() === 'error') consoleErrors.push(msg.text());
            };
            page.on('pageerror', onPageError);
            page.on('console', onConsole);

            // Stub /api/community-reports (backend not running during smoke tests)
            await page.route('**/api/community-reports', (route) =>
                route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
            );

            await page.setViewportSize({ width: w, height: h });

            const bypassPayload = buildOnboardingBypass();
            await page.goto('/onboarding');
            await page.evaluate(([key, payload]) => {
                localStorage.setItem(key, payload);
            }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

            await page.goto('/');
            await waitForReactMount(page);

            if (pageErrors.length > 0) allErrors.push(`${label}: pageerror(${pageErrors.length})`);
            if (consoleErrors.length > 0) allErrors.push(`${label}: console.error(${consoleErrors.length})`);

            // Remove only our own handlers (not all listeners on the event)
            page.off('pageerror', onPageError);
            page.off('console', onConsole);
        }

        expect(allErrors, 'No JS errors at any breakpoint').toEqual([]);
    });
});
