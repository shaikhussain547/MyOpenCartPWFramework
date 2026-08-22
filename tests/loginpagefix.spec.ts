import {test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
});

test('Login page title test', async ({loginPage}) => {
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async ({loginPage}) => {
    expect(await loginPage.isForgotPwdLinnkExist).toBeTruthy(); 
});

test('user is able to login to app test', async ({loginPage,homePage}) => {
    await loginPage.doLogin('pwtestbatch@open.com','pw123');
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});