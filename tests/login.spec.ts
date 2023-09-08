import {test, expect} from '../e2e/fixtures/pom-test'

test.describe('Login Page tests', () => {
    test('failed Login Attempt, Empty Fields', async ({loginPage}) => {
        await loginPage.emptyFailedLoginAttempt();
    });
    test('failed Login Attempt, Invalid Username', async ({loginPage}) => {
        await loginPage.invalidUsernameLoginAttempt();
    });
    test('successful Login Attempt', async ({loginPage}) => {
        await loginPage.login();
    });
});