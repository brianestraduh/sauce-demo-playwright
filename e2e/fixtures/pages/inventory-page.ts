import {type Locator, type Page, expect, test} from '@playwright/test'



export class InventoryPage {
    //variables
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly inventoryItems: Locator;
    readonly sortButton: Locator;
    readonly inventoryItemTitles: Locator;
    readonly itemNames: Array<string>;
    readonly sortedItemNames: Array<string>;
    readonly itemPrices: Locator;
    readonly backPackProductTitle: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.inventoryList = this.page.locator('.inventory_list');
        this.inventoryItems = this.page.locator('.inventory_item');
        this.sortButton = this.page.locator('.product_sort_container');
        this.inventoryItemTitles = this.page.locator('.inventory_item_name');
        this.itemPrices = this.page.locator('.inventory_item_price');
        this.backPackProductTitle = this.page.getByText('Sauce Labs Backpack');
    }

    //methods

    async InventoryPageLoads() {
        await expect(this.inventoryList).toBeVisible();
        await expect(this.inventoryItems).toHaveCount(6);
    }
    async SortByNameAtoZ() {
        await this.sortButton.selectOption({label: 'Name (A to Z)'});
            const itemNames = await this.page.$$eval('.inventory_item_name', (items) => {
            return items.map(item => item.textContent);
        });
        const sortedItemNames = [...itemNames].sort();
        console.log(itemNames);
        //expec to not equal
        expect(itemNames).toEqual(sortedItemNames);
        console.log(sortedItemNames);
    }

    async SortByNameZtoA() {
        await this.sortButton.selectOption({label: 'Name (Z to A)'});
            const itemNames = await this.page.$$eval('.inventory_item_name', (items) => {
            return items.map(item => item.textContent);
        });
        console.log(itemNames);
        const sortedItemNames = [...itemNames].sort().reverse();
        //expec to not equal
        expect(itemNames).toEqual(sortedItemNames);
        console.log(sortedItemNames);
    }

    async SortByPriceLowToHigh() {
        await this.sortButton.selectOption({label: 'Price (low to high)'});
        const itemPrices = await this.page.$$eval('.inventory_item_price', (items) => {
            return items.map(item => item.textContent);
        });
        //sort itemPrices array from low to high
        const sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
        //expect item prices to equal sorted item prices
        console.log(itemPrices, sortedItemPrices);
        expect(itemPrices).toEqual(sortedItemPrices);
        
        
    }
    async SortByPriceHighToLow() {
        await this.sortButton.selectOption({label: 'Price (high to low)'});
        const itemPrices = await this.page.$$eval('.inventory_item_price', (items) => {
            return items.map(item => item.textContent);
        });
        const sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
        //expect item prices to equal sorted item prices
        console.log(itemPrices, sortedItemPrices);
        expect(itemPrices).toEqual(sortedItemPrices);
        
    }
    async openBackPackProductPage() {
        await this.backPackProductTitle.click();
    }
    

}