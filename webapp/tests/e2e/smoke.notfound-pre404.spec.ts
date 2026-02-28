import { test, expect } from '@playwright/test';

/**
 * Pre-404 smoke test.
 *
 * Validates that navigating to a non-existent route does NOT crash the SPA.
 * In a client-side SPA, the server returns HTTP 200 for all routes;
 * the router handles unknown paths client-side.
 *
 * NOTE: Assert de copy/CTAs de la pantalla 404 real se agrega en Gate 5.2 (ADR-0004).
 */
test.describe('Smoke — Not Found (pre-404)', () => {
    test('"/ruta-inexistente" does not crash and renders some content (HTTP 200 in SPA)', async ({
        page,
    }) => {
        const response = await page.goto('/ruta-inexistente');

        // SPA should return 200 (client-side routing)
        expect(response?.status()).toBe(200);

        // Page should render without crashing — body has content
        await expect(page.locator('body')).not.toBeEmpty();

        // At least some DOM content is visible (not a blank page)
        const visibleElements = page.locator('body *:visible');
        const count = await visibleElements.count();
        expect(count).toBeGreaterThan(0);
    });
});
