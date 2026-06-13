class InventoryPage {

    constructor(page) {
        this.page = page;

        this.backpackAddButton =
            '[data-test="add-to-cart-sauce-labs-backpack"]';

        this.cartBadge = '.shopping_cart_badge';

        this.cartLink = '.shopping_cart_link';
    }

    async addBackpackToCart() {
        await this.page.click(this.backpackAddButton);
    }

    async openCart() {
        await this.page.click(this.cartLink);
    }
}

module.exports = InventoryPage;