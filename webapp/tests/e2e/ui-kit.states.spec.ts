import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const STATES = [
  { name: 'loading', testId: 'state-loading', rule: 'UI-STP-002' },
  { name: 'empty', testId: 'state-empty', rule: 'UI-STP-003' },
  { name: 'error', testId: 'state-error', rule: 'UI-STP-004' },
  { name: 'offline', testId: 'state-offline', rule: 'UI-STP-005' },
  { name: 'success', testId: 'state-success', rule: 'UI-STP-001' },
] as const;

// Resolve absolute output directory for committed PNGs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VISUAL_DIR = path.resolve(__dirname, '..', '..', 'tests', 'visual', 'ui-kit');

// ---------------------------------------------------------------------------
// Onboarding bypass — same pattern as smoke.notfound.spec.ts
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

const REACT_MOUNT_TIMEOUT = 10_000;

async function waitForReactMount(page: import('@playwright/test').Page) {
  await page.locator('#root').waitFor({ state: 'attached', timeout: REACT_MOUNT_TIMEOUT });
  await page.waitForFunction(
    () => (document.querySelector('#root')?.childElementCount ?? 0) > 0,
    { timeout: REACT_MOUNT_TIMEOUT },
  );
}

test.describe('UI-Kit — 5-State Pattern (Gate 5.3)', () => {
  for (const { name, testId, rule } of STATES) {
    test(`captures ${name} state (${rule})`, async ({ page }, testInfo) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (e) => pageErrors.push(e));
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      // Bypass onboarding (same pattern as smoke.notfound.spec.ts)
      await page.goto('/onboarding');
      const bypassPayload = buildOnboardingBypass();
      await page.evaluate(([key, payload]) => {
        localStorage.setItem(key, payload);
      }, [ONBOARDING_STORAGE_KEY, bypassPayload] as const);

      // Navigate to ui-kit with single state
      await page.goto(`/ui-kit?state=${name}`);
      await waitForReactMount(page);

      // Locate the specific state section
      const section = page.locator(`[data-testid="${testId}"]`);
      await expect(section).toBeVisible();

      // Determine viewport label from project name
      const viewport = testInfo.project.name.includes('mobile') ? 'mobile' : 'desktop';

      // Capture per-section screenshot to committed path
      const filename = `${rule}_${name}_${viewport}.png`;
      await section.screenshot({ path: path.join(VISUAL_DIR, filename) });

      // Zero JS errors
      expect(pageErrors, 'pageerror should be empty').toEqual([]);
      expect(consoleErrors, 'console.error should be empty').toEqual([]);
    });
  }
});
