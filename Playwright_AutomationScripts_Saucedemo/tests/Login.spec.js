const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test('Verify successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});

test('Verify invalid login shows error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'invalid_user',
        'wrong_password'
    );

    // Error message selector on SauceDemo
    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
});