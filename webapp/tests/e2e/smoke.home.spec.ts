import { test, expect } from '@playwright/test';

test.describe('Smoke — Home', () => {
    test('desktop: "/" loads without crashing and has visible content', async ({ page }) => {
        const pageErrors: Error[] = [];
        page.on('pageerror', (e) => pageErrors.push(e));
        const consoleErrors: string[] = [];
        page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

        // Stub /api/community-reports (backend not running during smoke tests)
        await page.route('**/api/community-reports', (route) =>
            route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
        );

        await page.goto('/');
        // Assert the page loaded and body has meaningful content
        await expect(page.locator('body')).not.toBeEmpty();
        // Assert at least one interactive or layout element is visible
        const visibleElements = page.locator('body *:visible');
        const count = await visibleElements.count();
        expect(count).toBeGreaterThan(0);

        // No JS errors should have occurred
        expect(pageErrors, 'pageerror should be empty').toEqual([]);
        expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });

    test('mobile: "/" renders and can capture screenshot', async ({ page }, testInfo) => {
        const pageErrors: Error[] = [];
        page.on('pageerror', (e) => pageErrors.push(e));
        const consoleErrors: string[] = [];
        page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

        // Stub /api/community-reports (backend not running during smoke tests)
        await page.route('**/api/community-reports', (route) =>
            route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ reports: [] }) })
        );

        await page.goto('/');
        await expect(page.locator('body')).not.toBeEmpty();
        // Screenshot for pipeline validation only — NOT a baseline yet
        // Output goes to test-results/ via testInfo.outputPath (not into repo tree)
        await page.screenshot({ path: testInfo.outputPath('home_mobile_smoke.png') });

        // No JS errors should have occurred
        expect(pageErrors, 'pageerror should be empty').toEqual([]);
        expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });
});
