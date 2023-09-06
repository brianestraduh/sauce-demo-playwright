import {test as base} from '@playwright/test';
import {LoginPage} from '../fixtures/pages/login-page';

type SauceFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<SauceFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    }
});
export {expect} from '@playwright/test';