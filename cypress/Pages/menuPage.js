class MenuPage{
    static hamburgerMenu(){
        cy.get('[class*=" sidebar-toggler"]').should('be.visible').click()
    }
}
export default MenuPage