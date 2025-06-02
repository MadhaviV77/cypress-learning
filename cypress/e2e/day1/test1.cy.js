

describe("login into sauce demo", () =>{

    // beforeEach(() => {
    //     cy.visit("https://www.saucedemo.com/");
    // })

    // it("1.login with valid credentials" , () => {  
    //     cy.login('standard_user', 'secret_sauce');
    // });

    // it("2. verify user not able to login sucessfully", () => {
    //     cy.login('abc', 'secret_sauce');
    //     cy.validateErrorMsg('Username and password do not match any user in this service');
    // })

    // it("3. verify user to not able to login successfully" , () => {
    //     cy.login('standard_user', 'xyz');
    //    cy.validateErrorMsg('Username and password do not match any user in this service');
    
    // })

    // it("4. verify user to not able to login successfully" , () => {
    //     cy.login('abc', 'xyz');
    //      cy.validateErrorMsg('Username and password do not match any user in this service');
    
    // })

    
// })


it("5. login and add frst item to cart " , () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    
    //cy.get("#add-to-cart-sauce-labs-backpack").click();
    
    //cy.get("#add-to-cart-sauce-labs-bike-light").click();

    it("add to cart" , () => {

        cy.addtocart("sauce labs bag pack");
    })
    
    //cy.get(".shopping_cart_badge").click();

    it("click on cart" , () => {
        cy.clickoncart();
    })

    cy.get(".inventory_item_name").contains("Sauce Labs Backpack");
    
    //cy.get("#checkout").click();

    it("click on checkout", () =>{
        cy.checkout();
    })


    //cy.get("#first-name").type("Madhu");
    //cy.get("#last-name").type("Vem");
    //cy.get("#postal-code").type("20148");
    //cy.get("#continue").click();
    //cy.get("#finish").click();
    
    it("enter details" , () => {  
         cy.enterdetails('Madhu', 'Vem', '20148');
    });
    
    
    
   
    




    })
    })

