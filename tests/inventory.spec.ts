import {test, expect} from '../e2e/fixtures/pom-test'


test.describe('Inventory Page tests', () => {
    test.beforeEach(async ({page}) => {
        //  go to intentory page
        await page.goto('/inventory.html');
    });
    test('should show inventory list', async ({inventoryPage}) => {
        await inventoryPage.InventoryPageLoads();
   
    });
    //implement test for sort by A-Z
    test('should sort by name, A-Z', async ({inventoryPage}) => {
        await inventoryPage.SortByNameAtoZ();
    });
    //implement test for sort by Z-A
    test('should sort by name Z-A', async ({inventoryPage}) => {
        await inventoryPage.SortByNameZtoA();
    });
    // implement test for sort by price, low to high
    test('should sort by price, low to high', async ({inventoryPage}) => {
        await inventoryPage.SortByPriceLowToHigh();
    });
    // implement test for sort by price, high to low
    test('should sort by price, high to low', async ({inventoryPage}) => {
        await inventoryPage.SortByPriceHighToLow();
    });

});