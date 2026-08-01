// Page Object for Cart Page
// Handles cart validation and checkout

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async timeout2(){
    await this.page.waitForTimeout(5000);
  }
}
