// Playwright configuration file
// Controls browser, baseURL, retries, reporter, etc.

import { defineConfig } from '@playwright/test';

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
  reporter: [['list'], ['./configure/reporterConfig.js']]
});
