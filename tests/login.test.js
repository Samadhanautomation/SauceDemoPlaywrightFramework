// Test for login functionality

import { test } from '../fixtures/testFixture.js';
import { expect } from '@playwright/test';             /// FIX: import expect from Playwright
import { validUser } from '../data/testData.js';

test('Login with valid user', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await expect (loginPage.page.locator('.title')).toHaveText('Products');
  
 // await loginPage.pause();  /// FIX: Pause the test for debugging
   //await loginPage.waitForTimeout(5000);

   await loginPage.timeout();  /// FIX: Call the timeout method to wait for 5 seconds

});
