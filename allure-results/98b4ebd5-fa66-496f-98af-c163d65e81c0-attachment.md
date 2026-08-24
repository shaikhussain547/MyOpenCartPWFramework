# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> verify search results count -macbook - MacBook Pro
- Location: tests\search.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'E-Mail Address' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "ACME System 1" [ref=e5] [cursor=pointer]:
        - /url: /
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home" [ref=e9] [cursor=pointer]:
            - /url: /
        - listitem [ref=e10]:
          - link "Switch to new theme" [ref=e11] [cursor=pointer]:
            - /url: https://acme-test.uipath.com/theme
        - listitem [ref=e12]:
          - link "Log In" [ref=e13] [cursor=pointer]:
            - /url: https://acme-test.uipath.com/login
  - generic [ref=e14]:
    - generic [ref=e16]:
      - heading "Login" [level=1] [ref=e17]
      - list [ref=e18]:
        - listitem [ref=e19]:
          - link "Home" [ref=e20] [cursor=pointer]:
            - /url: https://acme-test.uipath.com/home
        - listitem [ref=e21]: / Login
    - generic [ref=e22]:
      - generic [ref=e25]:
        - heading "To continue, please authenticate here" [level=3] [ref=e26]
        - generic [ref=e27]:
          - generic [ref=e29]:
            - generic [ref=e30]: "Email:"
            - textbox "Email:" [active] [ref=e31]
          - generic [ref=e33]:
            - generic [ref=e34]: "Password:"
            - textbox "Password:" [ref=e35]
          - generic [ref=e37]:
            - checkbox "Remember Me" [ref=e38]
            - generic [ref=e39]: Remember Me
          - button "Login" [ref=e40] [cursor=pointer]
          - link "Forgot Your Password?" [ref=e41] [cursor=pointer]:
            - /url: https://acme-test.uipath.com/password/reset
          - link "Register" [ref=e42] [cursor=pointer]:
            - /url: https://acme-test.uipath.com/register
      - contentinfo [ref=e43]:
        - generic [ref=e45]:
          - separator [ref=e46]
          - paragraph [ref=e47]: Copyright © 2026 ACME Systems
```

# Test source

```ts
  1  | // import {BasePage} from "./BasePage";
  2  | 
  3  | import { Locator, Page } from "@playwright/test";
  4  | import { BasePage } from "./BasePage";
  5  | 
  6  | export class LoginPage extends BasePage {
  7  | 
  8  |     //Private Locatorss:
  9  |     private readonly emailId : Locator;
  10 |     private readonly password : Locator;
  11 |     private readonly loginBtn : Locator;
  12 |     private readonly forgottenPasswordLink : Locator;
  13 |     private readonly logo : Locator;
  14 |     private readonly loginErrorMessage : Locator;
  15 | 
  16 |     //const... of the class : init the locators
  17 |     constructor(page : Page) {
  18 |         super(page);
  19 |         this.emailId = page.getByRole('textbox',{name : 'E-Mail Address'});
  20 |         this.password = page.getByRole('textbox',{name : 'Password'});
  21 |         this.loginBtn = page.getByRole('button',{name : 'Login'});
  22 |         this.forgottenPasswordLink = page.getByRole('link',{name:'Forgotten Password'}).first();
  23 |         this.logo = page.getByAltText('naveenopencart');
  24 |         this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
  25 |     }
  26 | 
  27 |     //public page actions(methods)/behaviour
  28 |     async goToLoginPage(): Promise<void> {
  29 |         // await this.page.goto('opencart/index.php?route=account/login');
  30 |         await this.page.goto('login');
  31 |     }
  32 | 
  33 |     async getLoginPageTitle():Promise<string> {
  34 |         return await this.page.title();
  35 |     }
  36 | 
  37 |     async isForgotPwdLinnkExist():Promise<boolean> {
  38 |         return await this.forgottenPasswordLink.isVisible();
  39 |     }
  40 | 
  41 |     async doLogin(username : string, password : string): Promise<void>  {
  42 |         console.log(`user creds: ${username} : ${password}`);
> 43 |         await this.emailId.fill(username);
     |                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  44 |         await this.password.fill(password);
  45 |         await this.loginBtn.click();
  46 |     }
  47 | 
  48 |     async invalidLoginErrorDisplayed():Promise<boolean> {
  49 |         return await this.loginErrorMessage.isVisible();
  50 |     }
  51 | 
  52 | }
```