import { test, expect } from '@playwright/test';

/**
 * Breakpoint Smoke Tests — SSOT UI-LAY-004 Verification
 *
 * Validates the SSOT layout contract for Smart Dock behavior across viewports.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │ UI-LAY-004 (MUST): Smart Dock: bottom bar XS-MD, side rail LG+    │
 * │ DOCREF: S01 → §6.3 → fila Smart Dock (L635)                      │
 * │ SOURCE: docs-ui/traceability_matrix.md (line 64)                  │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Invariants under test (derived from UI-LAY-004):
 *   - 360px (XS): Smart Dock visible as bottom bar
 *   - 480px (SM): Smart Dock visible as bottom bar
 *   - 768px (MD): Smart Dock visible as bottom bar ← DRIFT: current code hides at md
 *   - 1024px (LG): Smart Dock should be side rail  ← GAP: side rail not implemented
 *   - All viewports: zero JS errors (pageerror + console.error)
 *
 * NOTE: This test does NOT assert "desktop nav visible/hidden" because
 * no UI_RULE_ID + DOCREF exists for that behavior in the traceability matrix.
 *
 * DOCREF: ADR-0003 (ACCEPTED, Opción B) — Verificación §63-67
 * DOCREF: docs-ui/03_LAYOUTS.md — Breakpoints oficiales §20-33
 */

// ---------------------------------------------------------------------------
// Selectors — implementation-coupled (no data-testid available yet)
//
// FRAGILITY NOTE: These selectors are tied to the current markup structure
// in AppLayout.tsx. They will break if the markup changes semantically.
//
// TODO (Gate 5+): Add data-testid="smart-dock" to AppLayout.tsx,
// then update to page.getByTestId('smart-dock').
// ---------------------------------------------------------------------------

// Smart Dock (mobile bottom nav): <nav class="fixed bottom-0 ... md:hidden">
const SMART_DOCK = 'nav.fixed';

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
// Helper: setup error listeners, bypass onboarding, navigate to dashboard
// ---------------------------------------------------------------------------
async function setupPage(page: import('@playwright/test').Page, width: number, height: number) {
    const pageErrors: Error[] = [];
    page.on('pageerror', (e) => pageErrors.push(e));
    const consoleErrors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

    await page.setViewportSize({ width, height });

    // Inject onboarding bypass fixture
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();
    await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    await page.goto('/');

    // Wait for layout to render (avoids networkidle flakiness in SPAs)
    await page.locator('header').first().waitFor({ state: 'attached', timeout: 10_000 });

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

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at XS (360px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 360px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 360px').toEqual([]);
    });

    // ── SM = 480px ─────────────────────────────────────────────────────
    // UI-LAY-004: "bottom bar XS-MD" → dock visible at SM ✅
    test('480px (SM): Smart Dock visible as bottom bar, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 480, 800);

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at SM (480px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 480px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 480px').toEqual([]);
    });

    // ── MD = 768px ─────────────────────────────────────────────────────
    // UI-LAY-004: "bottom bar XS-MD" → dock should be visible at MD.
    // DRIFT: Current implementation uses md:hidden, hiding dock at ≥768px.
    // This test is expected to fail until AppLayout is fixed to show dock at MD.
    // Debe convertirse en test passing cuando se implemente (Gate 5+).
    test('768px (MD): Smart Dock visible as bottom bar — SSOT drift', async ({ page }) => {
        test.fail(true, 'SSOT UI-LAY-004 drift: dock should be bottom bar at MD (768px) but current code uses md:hidden. Must fix in Gate 5+ to align with SSOT.');

        const { pageErrors, consoleErrors } = await setupPage(page, 768, 900);

        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be bottom bar at MD (768px)').toBeVisible();

        expect(pageErrors, 'pageerror should be empty at 768px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 768px').toEqual([]);
    });

    // ── LG = 1024px ────────────────────────────────────────────────────
    // UI-LAY-004: "side rail LG+" → dock should be a side rail at LG.
    // GAP: Side rail component does not exist yet.
    // This test is expected to fail until side rail is implemented.
    // Debe convertirse en test passing cuando se implemente (Gate 5+).
    test('1024px (LG): Smart Dock visible as side rail — pending implementation', async ({ page }) => {
        test.fail(true, 'SSOT UI-LAY-004 pending: side rail not yet implemented at LG+ (1024px). Must become passing test when SideRail component is added (Gate 5+).');

        const { pageErrors, consoleErrors } = await setupPage(page, 1024, 900);

        // When implemented, a side rail nav should be visible at LG
        // Expected selector: page.getByTestId('side-rail') or equivalent
        // For now, assert dock is visible (it should be, as side rail)
        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'UI-LAY-004: Smart Dock should be side rail at LG (1024px)').toBeVisible();

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
            page.on('pageerror', (e) => pageErrors.push(e));
            const consoleErrors: string[] = [];
            page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

            await page.setViewportSize({ width: w, height: h });

            const bypassPayload = buildOnboardingBypass();
            await page.goto('/onboarding');
            await page.evaluate(([key, payload]) => {
                localStorage.setItem(key, payload);
            }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

            await page.goto('/');
            await page.locator('header').first().waitFor({ state: 'attached', timeout: 10_000 });

            if (pageErrors.length > 0) allErrors.push(`${label}: pageerror(${pageErrors.length})`);
            if (consoleErrors.length > 0) allErrors.push(`${label}: console.error(${consoleErrors.length})`);

            page.removeAllListeners('pageerror');
            page.removeAllListeners('console');
        }

        expect(allErrors, 'No JS errors at any breakpoint').toEqual([]);
    });
});
