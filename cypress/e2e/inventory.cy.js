// import { loginTests } from './login.cy'

// describe('inventory', () =>{
   
//     // before(() => {
//     //     loginTests() // Run this ONCE before all tests
//     //   })

//     it ('Product_search', () => {

//         loginTests()

//         //Validate login/validate title
//         cy.get('.app_logo').invoke('text').should('equal','Swag Labs');
            
//         //Select Filter Low to High
//         cy.get('.product_sort_container').select('Price (low to high)');

//         //Validate the filter
//         cy.get('.select_container>span').should('text', 'Price (low to high)');

//         //Add Product to cart 
//         cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

//         //Navigate to Cart
//         cy.get('.shopping_cart_link').click();

//         //Validate the Product
//         cy.get('.cart_item_label').invoke('text').should('contains', 'Sauce Labs Bolt T-Shirt');

//         //Remove the Product from the cart
//         cy.get('#remove-sauce-labs-bolt-t-shirt').click();

//         //Validate that Product is removed or not 
//         cy.get('.cart_list>div').should('class', 'removed_cart_item');


//         //Another Way
//         cy.get('#continue-shopping').should('be.visible').click();
//         cy.get('.shopping_cart_link').click();
//         cy.get('.cart_list>div').should('have.length', 2);

// });


// });



