import {type Locator, type Page, expect} from '@playwright/test'
import ENV from '../../../test-env/env'

export class LoginPage {
    //variables
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.username =  this.page.locator('[data-test="username"]')
        this.password = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    //methods
    async login() {
        await this.page.goto('/');
        await this.username.fill(ENV.USERNAME || 'standard_user');
        await this.password.fill(ENV.PASSWORD || 'secret_sauce');
        await this.loginButton.click();
    }

}
