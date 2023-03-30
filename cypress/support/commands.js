// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Custom Command to hit the cleaning-sessions endpoint and check it against an expected result.
Cypress.Commands.add('createCleaningSession', (requestData, expectedResults) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/v1/cleaning-sessions',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('coords');
        expect(response.body.coords).to.deep.equal(expectedResults.coords);
        expect(response.body).to.have.property('patches');
        expect(response.body.patches).to.eq(expectedResults.patches);
    });
});


// Test Development function to help see responses of various payloads to the endpoint.
Cypress.Commands.add('logCleaningSessionsResponse', (requestData, expectedResults) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/v1/cleaning-sessions',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData
    }).then((response) => {
        cy.log("Response Status: ", response.status);
        cy.log("Response Body: ", response.body);
    });
});

Cypress.Commands.add('handleInvalidRequest', (requestData) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/v1/cleaning-sessions',
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: requestData
    }).then((response) => {
        expect(response.status).to.eq(500);
    });
})