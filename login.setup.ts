import {test as setup, expect} from '@playwright/test';
import { STORAGE_STATE } from './playwright.config';
import ENV from './test-env/env'

setup('Login',async ({page}) => {
await page.goto('/');
await page.locator('[data-test="username"]').fill(ENV.USERNAME || 'standard_user');
await page.locator('[data-test="password"]').fill(ENV.PASSWORD || 'secret_sauce');
await page.locator('[data-test="login-button"]').click();
await page.context().storageState({ path: STORAGE_STATE,
 });
});