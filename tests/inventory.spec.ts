import {test, expect} from '../e2e/fixtures/pom-test'


test.describe('Inventory Page tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    test('should show inventory list', async ({inventoryPage}) => {
        inventoryPage.InventoryPageLoads();
   
    });
    //implement test for sort by A-Z
    test('should sort by name, A-Z', async ({inventoryPage}) => {
        inventoryPage.SortByNameAtoZ();
    });
    //implement test for sort by Z-A
    test('should sort by name Z-A', async ({inventoryPage}) => {
        inventoryPage.SortByNameZtoA();
    });
    // implement test for sort by price, low to high
    test('should sort by price, low to high', async ({inventoryPage}) => {
        inventoryPage.SortByPriceLowToHigh();
    });
    // implement test for sort by price, high to low
    test('should sort by price, high to low', async ({inventoryPage}) => {
        inventoryPage.SortByPriceHighToLow();
    });

});