class logout{
    elements = {
        logoutBtn: () => cy.get('a#logout2.nav-link'),
        loginNavBtn: () => cy.get('a#login2.nav-link')
    }

    clickLogout(){
        this.elements.logoutBtn().click();
        cy.wait(1000);
    }

    verifyLogout(){
        this.elements.loginNavBtn().contains('Log in')
    }
}

module.exports = new logout();