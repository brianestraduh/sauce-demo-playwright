import {test as base} from '@playwright/test';
import {LoginPage} from '../fixtures/pages/login-page';
import {InventoryPage} from '../fixtures/pages/inventory-page';
import {ProductPage} from '../fixtures/pages/product-page';

type SauceFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    productPage: ProductPage;
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
});
export {expect} from '@playwright/test';