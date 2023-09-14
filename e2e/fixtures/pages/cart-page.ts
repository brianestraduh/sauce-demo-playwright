import {type Locator, type Page, expect, test} from '@playwright/test'

export class CartPage {
    //variables
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly ContinueShoppingButton: Locator;
    readonly cartItems: Locator;
    readonly cartItemTitles: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.ContinueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
        this.cartItems = this.page.locator('.cart_item');
        this.cartItemTitles = this.page.locator('.inventory_item_name');
    }
    //methods
    async CartPageLoads() {
        expect(this.page).toHaveURL('/cart.html');
        expect(this.ContinueShoppingButton).toBeVisible();
        expect(this.checkoutButton).toBeVisible();
    }
    
    async ContinueShoppingWorks() {
        await this.ContinueShoppingButton.click();
        expect(this.page).toHaveURL('/inventory.html');
    }
    
    async CheckoutWorks() {
        await this.checkoutButton.click();
        expect(this.page).toHaveURL('/checkout-step-one.html');
    }

    async CartItemsAreCorrect() {
        await expect(this.cartItems).toHaveCount(2);
        //array of cart item titles
        const cartItemTitles = await this.page.$$eval('.inventory_item_name', (items) => {
            return items.map(item => item.textContent);
        });
        //array of expected cart item titles
        const expectedCartItemTitles = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
        //expect to equal
        expect(cartItemTitles).toEqual(expectedCartItemTitles);
        console.log(cartItemTitles, expectedCartItemTitles);
    }

}