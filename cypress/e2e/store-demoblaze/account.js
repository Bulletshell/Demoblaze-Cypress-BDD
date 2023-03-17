import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./page-object/homePage";
import login from "./page-object/login";
import logout from "./page-object/logout";


Given(/^John already login with his account$/, () => {
    homePage.open();
	login.clickLoginNavButton();
    login.typeUsername('wibowo.bullseye');
    login.typePassword('bullseye');
    login.clickLogin();
    login.verifyUsername('wibowo.bullseye');
});


When(/^John finished using the website, he logout from his account$/, () => {
	logout.clickLogout();
});


Then(/^John successfully logs out and redirected to the homepage$/, () => {
	logout.verifyLogout();
});
