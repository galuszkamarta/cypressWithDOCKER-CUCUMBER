class LoginPage{

    getEmail(){return 'input[type="email"]'}

    getPassword(){return 'input[type="password"]'}

    getSigningButton(){return 'button[type="submit"]'}

    enterEmail(email){
        cy.get(this.getEmail()).type(email)
    }

    enterPassword(password){
        cy.get(this.getPassword()).type(password)
    }

    clickSigninButton(password){
        cy.get(this.getSigningButton()).click()
    }

}

export default LoginPage