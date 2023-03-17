class productDetailPage {
    elements = {
        productNameLabel: () => cy.get('h2.name'),
        addToCartBtn: () => cy.get('a.btn.btn-success.btn-lg').contains('Add to cart'),

    }

    verifyProductPage(productName){
        this.elements.productNameLabel().should('contain', productName)
    }

    addProductToCart(){
        this.elements.addToCartBtn().click();
    }

    verifyAddToCartAlert(){
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added')
        });
    }
}

module.exports = new productDetailPage();