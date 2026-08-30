import { test, expect } from '@playwright/test';

test('get user test', async ({ request }) => {

    let response = await request.get('https://reqres.in/api/users/2', {

    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200);

});

let headersList = { 'Content-Type': 'application/json' }

test('create a user test', async ({ request }) => {

    //JS Object
    let userData = {
        "name":"morpheus",
        "job":"leader"
    };

    

    //JS Object to JSON: Serialization
    let response = await request.post('https://reqres.in/api/users', {
        headers: headersList,
        data: userData
    });

    //console.log(response);
    // Parse the JSON response
    let responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status());//201
    console.log(response.statusText()); //Created

    // Assert that the resource was created successfully (ReqRes returns 201)
    expect(response.status()).toBe(201);

    // Validate the returned data
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('leader');
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
});


test('Update a user test', async ({ request }) => {

    //JS Object
    let userData = {
        "name":"morpheus",
        "job":"zion resident"
    };

    //JS Object to JSON: Serialization
    let response = await request.put('https://reqres.in/api/users/2', {
        headers: headersList,
        data: userData
    });

    //console.log(response);
    // Parse and validate the response body
    let responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status());//200
    console.log(response.statusText()); //OK

    // Assert successful update (ReqRes returns 200 OK)
    expect(response.status()).toBe(200);

    // Parse and validate the response body
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('zion resident');
    expect(responseBody).toHaveProperty('updatedAt');
});

test('Delete a user test', async ({ request }) => {

    //JS Object to JSON: Serialization
    let response = await request.delete('https://reqres.in/api/users/2');

    console.log(response.status());//204
    console.log(response.statusText()); //No Content

    // Assert successful deletion (ReqRes returns 204 No Content)
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
});
