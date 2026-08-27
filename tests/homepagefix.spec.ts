import {test, expect} from '../src/fixtures/pagefixtures';


test.beforeEach(async ({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com','pw123');
})

test('Home page title test', async ({homePage}) => {
    const pageTitle = await homePage.getPageTitle();
    console.log('home page title', pageTitle);
    expect(pageTitle).toBe('My Account');
    
})

test('Logout link exist test', async ({homePage}) => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
    
})

test('Home Page headers exist test', async ({homePage}) => {
    let allHeaders:string[] = await homePage.getHomePageHeaders();
    console.log('home page headers: ',allHeaders);
    expect(allHeaders).toHaveLength(4);
    expect(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ]);

})