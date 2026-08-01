// Test for cart functionality

import { test } from '../fixtures/testFixture.js';
import { expect } from '@playwright/test';        /// FIX: import expect from Playwright
import { validUser } from '../data/testData.js';

test('Add item to cart', async ({ loginPage, inventoryPage, cartPage }) => {
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await loginPage.timeout();

  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();
  await inventoryPage.timeout1();
  
  const count = await cartPage.getCartItemCount();
  expect (count).toBe(1);
  await cartPage.timeout2();
  
  
});
