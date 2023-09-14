import {test as base} from '@playwright/test';
import {LoginPage} from '../fixtures/pages/login-page';
import {InventoryPage} from '../fixtures/pages/inventory-page';
import {ProductPage} from '../fixtures/pages/product-page';
import { CartPage } from './pages/cart-page';

type SauceFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    productPage: ProductPage;
    cartPage: CartPage;
};

export const test = base.extend<SauceFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },
    productPage: async ({page}, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    }
});
export {expect} from '@playwright/test';