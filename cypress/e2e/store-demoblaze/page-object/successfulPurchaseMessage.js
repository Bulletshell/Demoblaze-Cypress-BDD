 class purchaseMessage{
    elements = {
        successPurchaseLabel: () => cy.get('div.sweet-alert.showSweetAlert.visible').children('h2'),
        okBtn: () => cy.get('button.confirm.btn.btn-lg.btn-primary').contains('OK')
    }

    verifyPurchaseMessage(){
        this.elements.successPurchaseLabel().contains('Thank you for your purchase!');
    }

    clickOkBtn(){
        this.elements.okBtn().click();
    }
 }
 
 module.exports = new purchaseMessage();