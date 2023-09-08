import {test, expect} from '../e2e/fixtures/pom-test'

test.describe('Product Page tests', () => {
    test.beforeEach(async ({page}) => {
        //  go to intentory page
        await page.goto('/inventory.html');
    });
    test('product page for backpack should load', async ({productPage, inventoryPage}) => {
        await inventoryPage.openBackPackProductPage();
        await productPage.ProductPageLoads();
    });
});
