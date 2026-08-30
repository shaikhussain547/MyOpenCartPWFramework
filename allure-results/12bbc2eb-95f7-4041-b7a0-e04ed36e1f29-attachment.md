# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.api.spe.spec.ts >> GET API -- get all users
- Location: tests\api\users.api.spe.spec.ts:7:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import {test, expect } from '../../src/fixtures/apifixtures';
  2  | 
  3  | const TOKEN = process.env.API_TOKEN!;
  4  | let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
  5  | 
  6  | //GET test:
  7  | test('GET API -- get all users', async ({ apiHelper }) => {
  8  |     let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
> 9  |     expect(response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |     expect(response.body.length).toBeGreaterThan(0);
  11 | });
  12 | 
```