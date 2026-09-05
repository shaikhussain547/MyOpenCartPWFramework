import {test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage:LoginPage;
let homePage:HomePage;

// test.beforeEach(async ({page})=>{
//     loginPage = new LoginPage(page);
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin('pwtestbatch@open.com','pw123');
//     homePage = new HomePage(page);
// })

// test('Home page title test', async ({}) => {
//     const pageTitle = await homePage.getPageTitle();
//     console.log('home page title', pageTitle);
//     expect(pageTitle).toBe('My Account');
    
// })

// test('Logout link exist test', async ({}) => {
//     expect(await homePage.isLogoutLinkExist()).toBeTruthy();
    
// })

// test('Home Page headers exist test', async ({}) => {
//     let allHeaders:string[] = await homePage.getHomePageHeaders();
//     console.log('home page headers: ',allHeaders);
//     expect(allHeaders).toHaveLength(4);
//     expect(allHeaders).toEqual([
//         'My Account',
//         'My Orders',
//         'My Affiliate Account',
//         'Newsletter'
//     ]);

// })