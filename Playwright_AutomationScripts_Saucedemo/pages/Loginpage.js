const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;