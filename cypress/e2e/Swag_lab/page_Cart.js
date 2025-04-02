class Cartpage{

    ValidateProduct(ProductName){

    cy.get('.cart_item_label').invoke('text').should('contains', ProductName);
    }
    
    RemoveProduct(){
        cy.get('#remove-sauce-labs-bolt-t-shirt').click();
    }

    Validate_Remove(){
        cy.get('.cart_list>div').should('class', 'removed_cart_item');
    }

    Validate_Remove1(list){
     cy.get('#continue-shopping').should('be.visible').click();
     cy.get('.shopping_cart_link').click();
     cy.get('.cart_list>div').should('have.length', list);
    }
}
export default Cartpage;