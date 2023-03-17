class login{
    elements = {
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginBtn: () => cy.get("[onclick='logIn()']"),
        nameOfUser: () => cy.get('a#nameofuser.nav-link'),
        loginNavBtn: () => cy.get('a#login2.nav-link')
    }

    clickLoginNavButton(){
        this.elements.loginNavBtn().click();
    }

    typeUsername(username){
        cy.wait(1000)
        this.elements.usernameInput().type(username);
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
        cy.wait(1000);
    }

    verifyUsername(username){
        this.elements.nameOfUser().should('contain', username);
    }
}

module.exports = new login();