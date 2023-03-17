class cartPage{
    elements = {
        cartNavBtn: () => cy.get('a.nav-link').contains('Cart'),
        firstItemName: () => cy.get('tbody#tbodyid').children('.success').children().next('td'),
        totalPriceLabel: () => cy.get('h3#totalp')

    }

    goToCartPage(){
        this.elements.cartNavBtn().click();
    }

    verifyFirstItemName(itemName){
        this.elements.firstItemName().should('contain', itemName)
    }

    verifyTotalPriceCart(totalPrice){
        this.elements.totalPriceLabel().should('contain', totalPrice)
    }
}

module.exports = new cartPage();