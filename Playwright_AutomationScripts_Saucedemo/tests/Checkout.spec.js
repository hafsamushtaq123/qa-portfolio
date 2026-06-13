const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Verify successful checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await checkoutPage.checkout(
        'Hafsa',
        'Mushtaq',
        '46000'
    );

    await expect(
        page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');
});