// Page Object for Inventory Page
// Handles product listing and add-to-cart actions

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.inventoryItems.first().locator('button').click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async timeout1(){
    await this.page.waitForTimeout(5000);
  }
}
