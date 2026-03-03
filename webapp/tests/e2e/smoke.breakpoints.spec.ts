import { test, expect } from '@playwright/test';

/**
 * Breakpoint Smoke Tests — ADR-0003 (Opción B) Verification
 *
 * Validates the SSOT layout contract (docs-ui/03_LAYOUTS.md + ADR-0003):
 *   xs=360px, sm=480px, md=768px, lg=1024px
 *
 * Invariants under test:
 *   - 360px / 480px (below md): Smart Dock visible, desktop nav hidden
 *   - 768px / 1024px (md+): Smart Dock hidden, desktop nav visible
 *   - All viewports: zero JS errors (pageerror + console.error)
 *
 * DOCREF: ADR-0003 (ACCEPTED, Opción B) — Verificación §63-67
 * DOCREF: docs-ui/03_LAYOUTS.md — Breakpoints oficiales §20-33
 */

// ---------------------------------------------------------------------------
// Selectors — implementation-coupled (no data-testid available yet)
//
// FRAGILITY NOTE: These selectors are tied to the current markup structure
// in AppLayout.tsx. They will break if the markup changes semantically
// (e.g. <nav> replaced with <div role="navigation">, or restructured).
//
// TODO (Gate 5+): Add data-testid="smart-dock" and data-testid="desktop-nav"
// to AppLayout.tsx, then update these selectors to use
// page.getByTestId('smart-dock') / page.getByTestId('desktop-nav').
// ---------------------------------------------------------------------------

// Smart Dock (mobile bottom nav): <nav class="fixed bottom-0 ... md:hidden">
const SMART_DOCK = 'nav.fixed';
// Desktop nav (top navbar links): <nav class="hidden ... md:flex"> inside <header>
const DESKTOP_NAV = 'header nav';

// ---------------------------------------------------------------------------
// Onboarding bypass fixture — FRAGILE INTERNAL FIXTURE
//
// This directly injects Zustand persisted state to skip onboarding.
// It is NOT a contract — it mirrors the internal schema of useOnboardingStore.ts.
//
// If this fixture breaks (test fails with onboarding showing instead of
// dashboard), check for:
//   1. Key rename: grep for 'civicum-onboarding-storage' in src/store/
//   2. Schema change: compare with useOnboardingStore.ts state shape
//   3. Zustand version migration: check if persist version changed from 0
//
// DOCREF: webapp/src/store/useOnboardingStore.ts (key: 'civicum-onboarding-storage')
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

    // Inject onboarding bypass fixture before navigating to dashboard
    await page.goto('/onboarding');
    const bypassPayload = buildOnboardingBypass();
    await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
    }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

    await page.goto('/');

    // Wait for the actual layout to render rather than networkidle
    // (networkidle can flake in SPAs with polling/websockets/analytics).
    // We wait for <header> which is always present in AppLayout.
    await page.locator('header').first().waitFor({ state: 'attached', timeout: 10_000 });

    return { pageErrors, consoleErrors };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------
test.describe('Breakpoint Smoke — ADR-0003 Verification', () => {

    // ── xs = 360px ─────────────────────────────────────────────────────
    test('360px (xs): Smart Dock visible, desktop nav hidden, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 360, 800);

        // Smart Dock (bottom nav) must be visible at xs
        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'Smart Dock should be visible at 360px (xs)').toBeVisible();

        // Desktop nav must be hidden at xs
        const desktopNav = page.locator(DESKTOP_NAV).first();
        await expect(desktopNav, 'Desktop nav should be hidden at 360px (xs)').toBeHidden();

        // No JS errors
        expect(pageErrors, 'pageerror should be empty at 360px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 360px').toEqual([]);
    });

    // ── sm = 480px ─────────────────────────────────────────────────────
    test('480px (sm): Smart Dock visible, desktop nav hidden, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 480, 800);

        // Smart Dock still visible at sm (below md=768)
        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'Smart Dock should be visible at 480px (sm)').toBeVisible();

        // Desktop nav still hidden at sm
        const desktopNav = page.locator(DESKTOP_NAV).first();
        await expect(desktopNav, 'Desktop nav should be hidden at 480px (sm)').toBeHidden();

        // No JS errors
        expect(pageErrors, 'pageerror should be empty at 480px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 480px').toEqual([]);
    });

    // ── md = 768px ─────────────────────────────────────────────────────
    test('768px (md): Smart Dock hidden, desktop nav visible, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 768, 900);

        // Smart Dock should be hidden at md (md:hidden)
        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'Smart Dock should be hidden at 768px (md)').toBeHidden();

        // Desktop nav should be visible at md (md:flex)
        const desktopNav = page.locator(DESKTOP_NAV).first();
        await expect(desktopNav, 'Desktop nav should be visible at 768px (md)').toBeVisible();

        // No JS errors
        expect(pageErrors, 'pageerror should be empty at 768px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 768px').toEqual([]);
    });

    // ── lg = 1024px ────────────────────────────────────────────────────
    test('1024px (lg): Smart Dock hidden, desktop nav visible, no JS errors', async ({ page }) => {
        const { pageErrors, consoleErrors } = await setupPage(page, 1024, 900);

        // Smart Dock should be hidden at lg
        const dock = page.locator(SMART_DOCK).first();
        await expect(dock, 'Smart Dock should be hidden at 1024px (lg)').toBeHidden();

        // Desktop nav should be visible at lg
        const desktopNav = page.locator(DESKTOP_NAV).first();
        await expect(desktopNav, 'Desktop nav should be visible at 1024px (lg)').toBeVisible();

        // No JS errors
        expect(pageErrors, 'pageerror should be empty at 1024px').toEqual([]);
        expect(consoleErrors, 'console.error should be empty at 1024px').toEqual([]);
    });

    // ── Side rail at lg (ADR-0003 §67) — NOT YET IMPLEMENTED ──────────
    // IMPORTANT: When the side rail component is implemented (Gate 5+),
    // this MUST become a real test — not be deleted or remain skipped.
    // The test should assert:
    //   1. At 1024px (lg): a side rail <nav> is visible
    //   2. The bottom Smart Dock is NOT shown (replaced by side rail)
    //   3. The side rail contains the same nav items as the Smart Dock
    //
    // DOCREF: ADR-0003 §67 — "Smart Dock pasa de bottom bar a side rail en LG"
    // UI_RULE_ID: UI-LAY-004 (if applicable)
    test.skip('1024px (lg): Smart Dock transitions to side rail — implementation pending Gate 5+', () => {
        // GAP: Side rail component does not exist yet in AppLayout.tsx.
        // Current behavior: Smart Dock hidden via md:hidden (≥768px), no side rail.
        // When implemented, unskip this test and add real assertions per the notes above.
    });
});
