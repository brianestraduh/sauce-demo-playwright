import {test as setup, expect} from './e2e/fixtures/pom-test'
import { STORAGE_STATE } from './playwright.config';


setup('Login',async ({loginPage, page}) => {
await loginPage.login();
await page.context().storageState({ path: STORAGE_STATE,
 });
});