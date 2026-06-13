class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.checkoutButton = '[data-test="checkout"]';

        this.firstName = '[data-test="firstName"]';
        this.lastName = '[data-test="lastName"]';
        this.postalCode = '[data-test="postalCode"]';

        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';

        this.successMessage = '.complete-header';
    }

    async checkout(first, last, zip) {

        await this.page.click(this.checkoutButton);

        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, zip);

        await this.page.click(this.continueButton);

        await this.page.click(this.finishButton);
    }
}

module.exports = CheckoutPage;