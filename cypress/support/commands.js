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

 



Cypress.Commands.add('login', (username, password) => {
     cy.get("#user-name").type(username);
        cy.get("#password").type(password);
        cy.get("#login-button").click();
})

Cypress.Commands.add('validateErrorMsg' , (errorMsg) => {
    cy.get("h3[data-test=error]").should('contain', errorMsg)

})

Cypress.Commands.add('addtocart' , (productname) =>{
     cy.get("#add-to-cart-sauce-labs-backpack").click();
})

Cypress.Commands.add('clickoncart' , () => {
    cy.get(".shopping_cart_badge").click();
})

Cypress.Commands.add("checkout", ()=>{
    cy.get("#checkout").click();
})

Cypress.Commands.add('enterdetails', (firstname, lastname, zipcode) => {
     cy.get("#first-name").type(firstname);
        cy.get("#last-name").type(lastname);
        cy.get("#postal-code").type(zipcode);
        cy.get("#continue").click();
        cy.get("#finish").click();
})


