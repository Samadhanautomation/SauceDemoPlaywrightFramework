// Playwright configuration file
// Controls browser, baseURL, retries, reporter, etc.

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  use: {
    channel: 'msedge',
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  },
 
   projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  reporter: [['list'], ['./configure/reporterConfig.js']]
});
