import { test, expect } from '@playwright/test';

test.describe('Smoke — Home', () => {
    test('desktop: "/" loads without crashing and has visible content', async ({ page }) => {
        await page.goto('/');
        // Assert the page loaded and body has meaningful content
        await expect(page.locator('body')).not.toBeEmpty();
        // Assert at least one interactive or layout element is visible
        const visibleElements = page.locator('body *:visible');
        const count = await visibleElements.count();
        expect(count).toBeGreaterThan(0);
    });

    test('mobile: "/" renders and can capture screenshot', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('body')).not.toBeEmpty();
        // Screenshot for pipeline validation only — NOT a baseline yet
        await page.screenshot({ path: 'tests/e2e/screenshots/home_mobile_smoke.png' });
    });
});
