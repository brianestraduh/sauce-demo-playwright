import {test, expect} from '../e2e/fixtures/pom-test'


test.describe('Inventory Page tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    test('should show inventory list', async ({inventoryPage}) => {
        inventoryPage.InventoryPageLoads();
   
    });
    //implement test for sort by price, high to low
    // implement test for sort by price, low to high
    //implement test for sort by A-Z
    //implement test for sort by Z-A


});