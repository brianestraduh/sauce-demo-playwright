import {type Locator, type Page, expect} from '@playwright/test'

export class InventoryPage {
    //variables
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly inventoryItems: Locator;
    readonly sortButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.inventoryList = this.page.locator('.inventory_list');
        this.inventoryItems = this.page.locator('.inventory_item');
        this.sortButton = this.page.locator('.product_sort_container');
    }

    //methods
    async InventoryPageLoads() {
        await expect(this.inventoryList).toBeVisible();
        await expect(this.inventoryItems).toHaveCount(6);
    }

}