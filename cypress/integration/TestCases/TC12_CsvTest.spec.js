describe('Fixtures test',function(){
    var data;
    beforeEach(function(){
        data = cy.task('readCsv','cypress/fixtures/Csv.csv').then((rows) => {
            data = rows
        })
    })
 
    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(data[0])
        cy.get('input[type="password"]').type(data[1])
        cy.get('button[type="submit"]').click()
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })
 
    it('Conduit - Invalid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(data[2])
        cy.get('input[type="password"]').type(data[1])
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})
