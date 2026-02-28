import { test, expect } from '@playwright/test';

/**
 * Pre-404 smoke test.
 *
 * Validates that navigating to a non-existent route does NOT crash the SPA.
 * In a client-side SPA, the server returns HTTP 200 for all routes;
 * the router handles unknown paths client-side.
 *
 * CURRENT STATE: No catch-all route exists yet. The SPA may render an empty
 * page for unknown routes. This test only validates no crash (HTTP 200).
 *
 * NOTE: Assert de copy/CTAs de la pantalla 404 real se agrega en Gate 5.2 (ADR-0004).
 * At that point, body should have visible content and this test will be hardened.
 */
test.describe('Smoke — Not Found (pre-404)', () => {
    test('"/ruta-inexistente" does not crash (HTTP 200 in SPA)', async ({ page }) => {
        const response = await page.goto('/ruta-inexistente');

        // Ensure navigation returned a response
        expect(response, 'navigation response should not be null').not.toBeNull();

        // SPA should return 200 (client-side routing serves index.html)
        expect(response!.status()).toBe(200);

        // Page did not crash — document exists with a head and body
        // NOTE: body may be empty since no catch-all route exists yet (Gate 5.2 will add one)
        await expect(page.locator('html')).toBeAttached();
    });
});
