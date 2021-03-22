import {LogoutButton} from "./LoginResultPage";

class LoginPage {

    static goToPage(){
        cy.visit('/')
    }

    static fillUsernameField(userName){
        cy.get('[name*="user"]').type(userName)
    }

    static fillPassField(Pass){
        cy.get('[name="password"]').type(Pass)
    }

    static clickUsername(){
        cy.get('[class="dropdown dropdown-user dropdown-dark"]').click()
    }
    static clickLogOut(){
        cy.get('[class="dropdown-menu dropdown-menu-default"] a').contains(" Logout").click()
    }
}

export default LoginPage