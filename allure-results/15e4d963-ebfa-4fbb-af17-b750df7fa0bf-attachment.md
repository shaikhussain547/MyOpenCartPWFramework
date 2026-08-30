# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.api.indi.spec.ts >> POST - create a user
- Location: tests\api\users.api.indi.spec.ts:23:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Naveen API"
Received: "John API"
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures/apifixtures';
  2  | 
  3  | const TOKEN = process.env.API_TOKEN!;
  4  | let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}`, };
  5  | 
  6  | //helper - generic function - create a fresh user
  7  | async function createUser(apiHelper: any) {
  8  |     
  9  |     let userData = {
  10 |         name: 'John API',
  11 |         email: `automation_${Date.now()}@open.com`,
  12 |         gender: 'male',
  13 |         status: 'active'
  14 |     };
  15 | 
  16 |     let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
  17 |     expect(response.status).toBe(201);
  18 |     return response.body;
  19 | };
  20 | 
  21 | //Test 1: Create a user test + verify: AAA
  22 | //POST ---> userId --> GET /userId -- verify
  23 | test('POST - create a user', async ({ apiHelper }) => {
  24 | 
  25 |     //create a user:
  26 |     let userResponse = await createUser(apiHelper);
  27 | 
  28 |     //get the user:
  29 |     let response = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTH_HEADER);
  30 |     expect(response.status).toBe(200);
> 31 |     expect(response.body.name).toBe("Naveen API");
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  32 | 
  33 | });
```