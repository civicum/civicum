/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 300000,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'mobile-chromium',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 360, height: 800 },
      },
    },
  ],
  /* Dual web servers (Gate 5.7a):
   *   1) Hono backend on port 3001 (real API for /api/community-reports)
   *   2) Vite frontend on port 5173 (proxies /api → localhost:3001)
   *
   * Both start automatically when running `pnpm test:e2e`.
   * The real backend is available for wiring-reality tests (no intercept).
   * Intercept-based tests work regardless because route() takes priority.
   */
  webServer: [
    {
      command: 'pnpm dev:server',
      url: 'http://localhost:3001/health',
      reuseExistingServer: true,
      timeout: 300000,
    },
    {
      command: 'pnpm dev',
      url: 'http://localhost:5173',
      reuseExistingServer: true,
      timeout: 300000,
    },
  ],
});