class LoginPage {

    SetUserName (username){
        cy.get('#user-name').type(username);
    }

    SetPassword (password){
        cy.get('#password').type(password);
    }

    ClickSubmit (){
        cy.get('#login-button').click();
    }

}
export default LoginPage;