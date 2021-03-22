import {Given, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../Pages/LoginPage";
import {Logo, LoginButton} from "../../Pages/LoginResultPage"
import {Menu, Submenus} from "../../Pages/menuResultePage"
import MenuPage from "../../Pages/menuPage";
let name = ['Institutions', 'Students', 'RAP Accounts', 'Verified RAP Accounts', 'Terms and Conditions',
            'User Activity', 'Data Export', 'CFP Admin', 'Fee And Enrollment Type ', 'Administration']


Given(/I login my profile with correct "([^"]*)" & "([^"]*)"$/, function(userName,pass){
        LoginPage.goToPage()
        LoginPage.fillUsernameField(userName)
        LoginPage.fillPassField(pass)
        LoginButton.expect().toBeVisible()
        Logo.expect().toBeVisible()
})

Given('I check is the menu selection visible', function(){
        Menu.expect().toBeVisible()
})

Given('I click hamburger menu button', function(){
        MenuPage.hamburgerMenu()
})

Then('I check is the submenus elements visible', function(){
        Submenus.expect().toBeVisible(name)
})

Then('I check is the submenus elements invisible', function (){
        Submenus.expect().toBeTextInVisible(name)
})