import {Given, When} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../Pages/LoginPage";
import {Logo, LoginButton, LogoutButton, UsernameHeader} from "../../Pages/LoginResultPage"

Given ('I go to login page', function(){
    LoginPage.goToPage()
})

When(/I fill "([^"]*)" in username field$/, function(userName){
    LoginPage.fillUsernameField(userName)
})

When(/I fill "([^"]*)" in password field$/, function(pass){
    LoginPage.fillPassField(pass)
})

When("I click login button", function(){
    LoginButton.expect().toBeVisible()
})

When ("Check am I logged in", function(){
    Logo.expect().toBeVisible()
})

Given(/I login my profile with correct "([^"]*)" & "([^"]*)"$/, function(userName,pass){
    LoginPage.goToPage()
    LoginPage.fillUsernameField(userName)
    LoginPage.fillPassField(pass)
    LoginButton.expect().toBeVisible()
    Logo.expect().toBeVisible()
})

When("I click on username from header", function (){
    UsernameHeader.expect().toBeVisible()
    LoginPage.clickUsername()
})

When("I click 'Log out' button", function (){

    LoginPage.clickLogOut()
})

Then("Check am I logged out", function (){
    LogoutButton.expect().toBeVisibleLoginTitle()
})