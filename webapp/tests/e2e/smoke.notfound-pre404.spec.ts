import { test, expect } from '@playwright/test';

/**
 * 404 Not Found smoke test — ADR-0004 Verification
 *
 * Validates that navigating to a non-existent route renders the 404 page
 * inside AppLayout, with ADR-0004 copy and CTAs.
 *
 * DOCREF: ADR-0004 (ACCEPTED) — Diseño de pantalla 404
 * DOCREF: UI-NAV-008 (GAP cerrado)
 */

// Onboarding bypass (same fixture as breakpoint tests)
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

test.describe('Smoke — Not Found (404)', () => {
    test('"/ruta-inexistente" renders 404 page with copy and CTAs', async ({ page }) => {
        const pageErrors: Error[] = [];
        page.on('pageerror', (e) => pageErrors.push(e));
        const consoleErrors: string[] = [];
        page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

        // Bypass onboarding so ProtectedRoute lets us through
        await page.goto('/onboarding');
        const bypassPayload = buildOnboardingBypass();
        await page.evaluate(([key, payload]) => {
            localStorage.setItem(key, payload);
        }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

        const response = await page.goto('/ruta-inexistente');

        // SPA should return 200 (client-side routing serves index.html)
        expect(response, 'navigation response should not be null').not.toBeNull();
        expect(response!.status()).toBe(200);

        // #root must have mounted content (404 page, not empty)
        await page.waitForFunction(
            () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
            { timeout: 10_000 },
        );

        // ADR-0004 copy principal must be visible
        await expect(
            page.getByText('Esta página no existe'),
            'ADR-0004 copy principal should be visible',
        ).toBeVisible();

        // CTA primario "Volver al inicio" must exist and be visible
        const ctaPrimario = page.getByRole('link', { name: /volver al inicio/i });
        await expect(ctaPrimario, 'CTA primario should be visible').toBeVisible();

        // CTA secundario "Explorar módulos" must exist and be visible
        const ctaSecundario = page.getByRole('link', { name: /explorar módulos/i });
        await expect(ctaSecundario, 'CTA secundario should be visible').toBeVisible();

        // No JS errors should have occurred
        expect(pageErrors, 'pageerror should be empty').toEqual([]);
        expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });
});
