class HomePage{

    verifyLogo(applogo){
        cy.get('.app_logo').invoke('text').should('equal',applogo);
    }

    AddFilter(filter_value){
        cy.get('.product_sort_container').select(filter_value);
        cy.get('.select_container>span').should('text', filter_value);
    }

    addProduct(){
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    }

    goToCart(){
        cy.get('.shopping_cart_link').click();
    }

}
export default HomePage;