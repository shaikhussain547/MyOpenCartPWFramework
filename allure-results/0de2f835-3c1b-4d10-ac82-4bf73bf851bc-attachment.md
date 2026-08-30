# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.api.spe.spec.ts >> PUT API -- Update a user
- Location: tests\api\users.api.spe.spec.ts:29:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test, expect } from '../../src/fixtures/apifixtures';
  2  | 
  3  | const TOKEN = process.env.API_TOKEN!;
  4  | let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
  5  | let userId: number;
  6  | 
  7  | //GET test:
  8  | test('GET API -- get all users', async ({ apiHelper }) => {
  9  |     let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
  10 |     expect(response.status).toBe(200);
  11 |     expect(response.body.length).toBeGreaterThan(0);
  12 | });
  13 | 
  14 | test('POST API -- create a user', async ({ apiHelper }) => {
  15 |     let userData = {
  16 |         name: 'Naveen API',
  17 |         email: `automation_${Date.now()}@open.com`,
  18 |         gender: 'male',
  19 |         status: 'active'
  20 |     };
  21 | 
  22 |     let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
  23 |     expect(response.status).toBe(201);
  24 |     expect(response.body.name).toBe(userData.name);
  25 |     userId = response.body.id;
  26 |     console.log('Created User Id: ', userId);
  27 | });
  28 | 
  29 | test('PUT API -- Update a user', async ({ apiHelper }) => {
  30 |     let userUpdatedData = {
  31 |         name: 'Naveen API Updated',
  32 |         status: 'inactive'
  33 |     };
  34 | 
  35 |     let response = await apiHelper.put(`/public/v2/users/${userId}`, userUpdatedData, AUTH_HEADER);
> 36 |     expect(response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  37 |     expect(response.body.name).toBe(userUpdatedData.name);
  38 |     expect(response.body.status).toBe(userUpdatedData.status);
  39 | });
  40 | 
```