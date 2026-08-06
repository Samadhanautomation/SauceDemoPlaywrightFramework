// Playwright configuration file
// Controls browser, baseURL, retries, reporter, etc.

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  use: {
    channel: 'msedge',
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure'
  },
 
   projects: [
  { name: 'chromium', use: { browserName: 'chromium' } },   // default Chromium
  { name: 'firefox', use: { browserName: 'firefox' } },     // no channel
  { name: 'webkit', use: { browserName: 'webkit' } }        // no channel
],


  reporter: [['list'], ['./configure/reporterConfig.js']]
});
