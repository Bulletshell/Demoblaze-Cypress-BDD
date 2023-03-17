class placeOrder{
    elements = {
        placeOrderBtn: () => cy.get('button.btn.btn-success').contains('Place Order'),
        placeOrderFormLabel: () => cy.get('h5#orderModalLabel.modal-title'),
        nameInput: () => cy.get('input#name.form-control'),
        countryInput: () => cy.get('input#country.form-control'),
        cityInput: () => cy.get('input#city.form-control'),
        creditCardInput: () => cy.get('input#card.form-control'),
        monthInput: () => cy.get('input#month.form-control'),
        yearInput: () => cy.get('input#year.form-control'),
        purchaseBtn: () => cy.get('button.btn.btn-primary').contains('Purchase'),
        
    }

    clickPlaceOrderBtn(){
        this.elements.placeOrderBtn().click()
        cy.wait(1000)
    }

    verifyPlaceOrderForm(){
        this.elements.placeOrderFormLabel().should('contain', 'Place order')
    }

    typeName(name){
        this.elements.nameInput().type(name)
    }
    typeCountry(country){
        this.elements.countryInput().type(country)
    }
    typeCity(city){
        this.elements.cityInput().type(city)
    }
    typeCreditCard(creditCard){
        this.elements.creditCardInput().type(creditCard)
    }
    typeMonth(month){
        this.elements.monthInput().type(month)
    }
    typeYear(year){
        this.elements.yearInput().type(year)
    }

    clickPurchaseBtn(){
        this.elements.purchaseBtn().click();
    }
}

module.exports = new placeOrder();