class homePage{
    elements = {
        productDetailLink: (productName) => cy.get('a.hrefch').contains(productName),
    }

    clickProductDetailLink(productName){
        this.elements.productDetailLink(productName).click();
        cy.wait(1000);
    }

    open(){
        cy.visit('https://demoblaze.com/index.html')
    }
}
    module.exports = new homePage();