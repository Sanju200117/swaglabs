// describe('Login', () => {
//   it('Visit_website', () => {
  
//   //Visit the site

//     cy.visit("https://www.saucedemo.com");

//   //Login

//     cy.fixture('swaglabs').then( (testdata)=>{

//       //Using custom command for login and also fixture file for taking username and password
//       cy.login(testdata.username, testdata.password);
      

//       // cy.get('#user-name').type(testdata.username);
//       // cy.get('#password').type(testdata.password);
//       // cy.get('#login-button').click();

//     });
    
//     // let usernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"]
//     // let selectedUsername = usernames[0];
//     // console.log("Selected username: ", selectedUsername);


//     //Validate login/validate title
//     cy.get('.app_logo').invoke('text').should('equal','Swag Labs');

    
//      //Select Filter Low to High
//      cy.get('.product_sort_container').select('Price (low to high)');

//      //Validate the filter
//      cy.get('.select_container>span').should('text', 'Price (low to high)');
 
//      //Add Product to cart 
//      cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
 
//      //Navigate to Cart
//      cy.get('.shopping_cart_link').click();
 
//      //Validate the Product
//      cy.get('.cart_item_label').invoke('text').should('contains', 'Sauce Labs Bolt T-Shirt');
 
//      //Remove the Product from the cart
//      cy.get('#remove-sauce-labs-bolt-t-shirt').click();
 
//      //Validate that Product is removed or not 
//      cy.get('.cart_list>div').should('class', 'removed_cart_item');
 
 
//      //Another Way
//      cy.get('#continue-shopping').should('be.visible').click();
//      cy.get('.shopping_cart_link').click();
//      cy.get('.cart_list>div').should('have.length', 2);
//    });
     
 

//   });
    

