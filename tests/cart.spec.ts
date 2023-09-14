import {test, expect} from '../e2e/fixtures/pom-test'

test.describe('Cart Page tests', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('/inventory.html');
    });
    test('should show cart page', async ({inventoryPage, cartPage}) => {
        await inventoryPage.addItemsToCart();
        await inventoryPage.openCartPage();
        await cartPage.CartPageLoads();
    });
    test('continue shopping button works', async ({inventoryPage, cartPage}) => {
        await inventoryPage.addItemsToCart();
        await inventoryPage.openCartPage();
        await cartPage.ContinueShoppingWorks();
    });
    test('checkout button works', async ({inventoryPage, cartPage}) => {    
        await inventoryPage.addItemsToCart();
        await inventoryPage.openCartPage();
        await cartPage.CheckoutWorks();
    });
    test('cart items are correct', async ({inventoryPage, cartPage}) => {
        await inventoryPage.addItemsToCart();
        await inventoryPage.openCartPage();
        await cartPage.CartItemsAreCorrect();
    });

});