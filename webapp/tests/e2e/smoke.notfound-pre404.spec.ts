import { test, expect } from '@playwright/test';

/**
 * Pre-404 smoke test.
 *
 * Validates that navigating to a non-existent route does NOT crash the SPA.
 * In a client-side SPA, the server returns HTTP 200 for all routes;
 * the router handles unknown paths client-side.
 *
 * CURRENT STATE: No catch-all route exists. React renders an empty #root
 * for unknown routes. This test validates:
 * - HTTP 200 (index.html served)
 * - #root container exists (React app mounted)
 * - No JS errors / crash
 *
 * NOTE: Gate 5.2 (ADR-0004) will add a catch-all 404 page, at which point
 * this test should be hardened to assert visible content inside #root.
 */
test.describe('Smoke — Not Found (pre-404)', () => {
    test('"/ruta-inexistente" does not crash (HTTP 200 in SPA)', async ({ page }) => {
        const pageErrors: Error[] = [];
        page.on('pageerror', (e) => pageErrors.push(e));
        const consoleErrors: string[] = [];
        page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

        const response = await page.goto('/ruta-inexistente');

        // Ensure navigation returned a response
        expect(response, 'navigation response should not be null').not.toBeNull();

        // SPA should return 200 (client-side routing serves index.html)
        expect(response!.status()).toBe(200);

        // React root container must exist (confirms index.html was served and React mounted)
        await expect(page.locator('#root')).toHaveCount(1);

        // NOTE: #root is currently EMPTY for unknown routes (no catch-all).
        // When Gate 5.2 adds a 404 catch-all page, uncomment:
        // await expect(page.locator('#root')).not.toBeEmpty();

        // No JS errors should have occurred
        expect(pageErrors, 'pageerror should be empty').toEqual([]);
        expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });
});
