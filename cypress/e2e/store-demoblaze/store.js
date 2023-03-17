import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./page-object/homePage";
import productDetailPage from "./page-object/productDetail";
import cartPage from "./page-object/cartPage";
import placeOrderForm from "./page-object/placeOrderForm";
import successfulPurchaseMessage from "./page-object/successfulPurchaseMessage";

Given(/^Ali view Samsung Galaxy S6 phone information detail$/, () => {
	homePage.open();
	homePage.clickProductDetailLink('Samsung galaxy s6');
});


When(/^Ali likes it, He add the phone to the cart$/, () => {
	productDetailPage.verifyProductPage('Samsung galaxy s6');
	productDetailPage.addProductToCart();
	productDetailPage.verifyAddToCartAlert();
});


Then(/^Ali can see the goods in the cart$/, () => {
	cartPage.goToCartPage();
	cartPage.verifyFirstItemName('Samsung galaxy s6')
    cartPage.verifyTotalPriceCart('360');
});


Given(/^Budi finds a product he likes$/, () => {
	homePage.open();
	homePage.clickProductDetailLink('Nokia lumia 1520');
	productDetailPage.verifyProductPage('Nokia lumia 1520');
	productDetailPage.addProductToCart();
	productDetailPage.verifyAddToCartAlert();
	cartPage.goToCartPage();
	cartPage.verifyFirstItemName('Nokia lumia 1520')
    cartPage.verifyTotalPriceCart('820');
});


When(/^Budi proceeds to purchase the item$/, () => {
	placeOrderForm.clickPlaceOrderBtn();
	placeOrderForm.verifyPlaceOrderForm();
	placeOrderForm.typeName('Testing User');
	placeOrderForm.typeCountry('Indonesia');
	placeOrderForm.typeCity('Jakarta');
	placeOrderForm.typeCreditCard('1234-5678-91011')
	placeOrderForm.typeMonth('06');
	placeOrderForm.typeYear('2023');
	placeOrderForm.clickPurchaseBtn();
});


Then(/^Budi successfully ordered the item$/, () => {
	successfulPurchaseMessage.verifyPurchaseMessage();
	successfulPurchaseMessage.clickOkBtn();
});

