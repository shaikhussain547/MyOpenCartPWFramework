# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\amadeus.oauth2.spec.ts >> GET -- get location data
- Location: tests\api\amadeus.oauth2.spec.ts:28:1

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND test.api.amadeus.com
Call log:
  - → POST https://test.api.amadeus.com/v1/security/oauth2/token
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 103

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | let OAUTH_CONFIG = {
  4  |     tokenURL: 'https://test.api.amadeus.com/v1/security/oauth2/token',
  5  |     clientId: process.env.OAUTH_CLIENT_ID!,
  6  |     clientSecret: process.env.OAUTH_CLIENT_SECRET!,
  7  |     grantType: process.env.GRANT_TYPE!
  8  | }
  9  | 
  10 | let accessToken: string;
  11 | 
  12 | test.beforeEach('POST -- generate the access token', async ({ request }) => {
  13 | 
> 14 |     let response = await request.post(OAUTH_CONFIG.tokenURL, {
     |                                  ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND test.api.amadeus.com
  15 |         form: {
  16 |             grant_type: OAUTH_CONFIG.grantType,
  17 |             client_id: OAUTH_CONFIG.clientId,
  18 |             client_secret: OAUTH_CONFIG.clientSecret
  19 |         }
  20 |     });
  21 | 
  22 |     expect(response.status()).toBe(200);
  23 |     let jsonResponse = await response.json();
  24 |     console.log(jsonResponse);
  25 |     accessToken = jsonResponse.access_token;
  26 | });
  27 | 
  28 | test('GET -- get location data', async ({ request }) => {
  29 | 
  30 |     //https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE
  31 |     let baseURL = 'https://test.api.amadeus.com';
  32 |     let endPointURL = '/v1/reference-data/locations';
  33 | 
  34 |     let queryParam = {
  35 |         subType: 'CITY,AIRPORT',
  36 |         keyword: 'MUC',
  37 |         countryCode: 'DE'
  38 |     };
  39 | 
  40 |     let locationResponse = await request.get(`${baseURL}${endPointURL}`, {
  41 |         headers: {
  42 |             Authorization: `Bearer ${accessToken}`
  43 |         },
  44 |         params: queryParam
  45 | 
  46 |     });
  47 | 
  48 |     expect(locationResponse.status()).toBe(200);
  49 |     console.log(await locationResponse.json());
  50 | 
  51 |     let locationJson = await locationResponse.json();
  52 |     console.log(locationJson.meta.count);
  53 | 
  54 |     let location1 = locationJson.data[0];
  55 |     console.log(location1);
  56 | });
  57 | 
  58 | 
```