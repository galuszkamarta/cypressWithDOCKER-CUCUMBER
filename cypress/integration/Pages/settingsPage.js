class SettingsPage{

    getLogoutButton(){return 'Or click here to logout.'}

    clickLogouButton(){
        cy.contains(this.getLogoutButton()).click()
    }
}

export default SettingsPage