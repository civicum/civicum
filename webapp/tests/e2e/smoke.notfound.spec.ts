import { test, expect } from '@playwright/test';

/**
 * 404 Not Found smoke test — ADR-0004 Verification (SEALED)
 *
 * Validates that navigating to a non-existent route renders the 404 page
 * inside AppLayout (header + Smart Dock visible), with ADR-0004 literal copy
 * and functional CTAs.
 *
 * DOCREF: ADR-0004 (ACCEPTED) — Diseño de pantalla 404
 * DOCREF: UI-NAV-008 (GAP cerrado Gate 5.2, commit 7bb2c42)
 * DOCREF: UI-CNT-004 — errores humanos, no técnicos
 */

// ---------------------------------------------------------------------------
// Onboarding bypass fixture — same as smoke.breakpoints.spec.ts
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

// ---------------------------------------------------------------------------
// Dual-wait for React mount (same pattern as smoke.breakpoints.spec.ts)
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
            'Possible causes: onboarding bypass fixture broken, ' +
            'route renders nothing, or JS error prevented mount.'
        );
    });
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------
test.describe('Smoke — Not Found (404)', () => {
    test('"/ruta-inexistente" renders 404 inside AppLayout with exact ADR-0004 copy and CTAs', async ({ page }) => {
        // ── Error listeners (with stored refs for clean removal) ──
        const pageErrors: Error[] = [];
        const onPageError = (e: Error) => pageErrors.push(e);
        const consoleErrors: string[] = [];
        const onConsole = (msg: import('@playwright/test').ConsoleMessage) => {
            if (msg.type() === 'error') consoleErrors.push(msg.text());
        };
        page.on('pageerror', onPageError);
        page.on('console', onConsole);

        // ── Bypass onboarding (ProtectedRoute guard) ──
        await page.goto('/onboarding');
        const bypassPayload = buildOnboardingBypass();
        await page.evaluate(([key, payload]) => {
            localStorage.setItem(key, payload);
        }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

        // ── Navigate to non-existent route ──
        const response = await page.goto('/ruta-inexistente');

        // SPA: server returns 200, router handles 404 client-side
        expect(response, 'response should not be null').not.toBeNull();
        expect(response!.status(), 'SPA should return HTTP 200').toBe(200);

        // ── Wait for React mount ──
        await waitForReactMount(page);

        // ── Assert: inside AppLayout (header exists) ──
        await expect(
            page.locator('header').first(),
            'AppLayout header should be visible (proves 404 renders inside AppLayout)',
        ).toBeVisible();

        // ── Assert: ADR-0004 §35 copy principal (exact) ──
        await expect(
            page.getByText('Esta página no existe — pero tu camino cívico sí.', { exact: true }),
            'ADR-0004 §35 copy principal must be visible (exact match)',
        ).toBeVisible();

        // ── Assert: ADR-0004 §36 copy secundario (exact) ──
        await expect(
            page.getByText('Quizás la dirección cambió o escribiste algo distinto.', { exact: true }),
            'ADR-0004 §36 copy secundario must be visible (exact match)',
        ).toBeVisible();

        // ── Assert: CTA primario navigates to "/" ──
        const ctaPrimario = page.getByRole('link', { name: /volver al inicio/i });
        await expect(ctaPrimario, 'CTA primario should be visible').toBeVisible();
        await ctaPrimario.click();
        await expect(page).toHaveURL('/');

        // ── Navigate back to 404 for CTA secundario test ──
        await page.goto('/ruta-inexistente');
        await waitForReactMount(page);

        // ── Assert: CTA secundario navigates to "/alza-la-voz" ──
        const ctaSecundario = page.getByRole('link', { name: /explorar módulos/i });
        await expect(ctaSecundario, 'CTA secundario should be visible').toBeVisible();
        await ctaSecundario.click();
        await expect(page).toHaveURL('/alza-la-voz');

        // ── Assert: no JS errors ──
        expect(pageErrors, 'pageerror should be empty').toEqual([]);
        expect(consoleErrors, 'console.error should be empty').toEqual([]);

        // ── Clean up listeners ──
        page.off('pageerror', onPageError);
        page.off('console', onConsole);
    });
});
