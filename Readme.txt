1. Create a folder in local files directory and open it with VS Code
2. Install Playwright using terminal
	-->  npm init -y    {package.json} created
	-->  npm init playwright@latest

3. You can modify package.json
4. Create tsconfig.json file

/*** Allure Reports ***/
npm install --save-dev allure-playwright allure-commandline

--> Add reports commands in config.ts file

  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html-report", open: "never" }],
    ["allure-playwright", {
      outputFolder: "allure-results",
      suiteTitle: true,
    }],
  ],


--> Add scripts commands in package.json file

  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:chrome": "npx playwright test --project=chromium",
    "allure:generate": "npx allure generate allure-results --clean -o allure-report",
    "allure:open": "npx allure open allure-report",
    "allure:report": "npm run allure:generate && npm run allure:open",
    "allure:clean": "rm -rf allure-results allure-report"
  },


/*** env package download ***/
npm install dotenv

--> add below code in config.ts file

  import dotenv from 'dotenv';   

  //ENV=qa npx playwright test
  const ENV = process.env.ENV || "qa";
  console.log('Running tests on Environment: ', ENV);
  dotenv.config({ path: `config/.env.${ENV}` });

ENV=qa npx playwright test tests/loginpagefix.spec.ts


/*** csv package download ***/
npm install csv-parse


/*** excel package download ***/
npm install xlsx











