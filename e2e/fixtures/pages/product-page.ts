import {type Locator, type Page, expect} from '@playwright/test'

export class ProductPage {
    //variables
    readonly page: Page;
    readonly productTitle: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly productImage: Locator;
    readonly addToCartButton: Locator;
    readonly backToProductsButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.productTitle = this.page.locator('.inventory_details_name');
        this.productDescription = this.page.locator('.inventory_details_desc');
        this.productPrice = this.page.locator('.inventory_details_price');
        this.productImage = this.page.locator('.inventory_details_img');
        this.addToCartButton = this.page.locator('.btn_primary.btn_inventory');
        this.backToProductsButton = this.page.locator('.inventory_details_back_button');

    }
    //methods
    async ProductPageLoads() {
        await expect(this.page).toHaveURL('/inventory-item.html?id=4');
        await expect(this.productTitle).toBeVisible();
        await expect(this.productDescription).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.productImage).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
    }
    async BackToProducts() {
        await this.backToProductsButton.click();
    }


}