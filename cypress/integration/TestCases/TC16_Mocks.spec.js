describe('Mocks Testing',function(){
 
    beforeEach(function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })
 
    it('Username testing',function(){
        cy.intercept('POST','**/api/users/login',{fixture:'login.json'})
        cy.get('a[href^="#@"]').should('contain','Vignesh-Cypress-Project')
    })
 
    it('Tags testing',function(){
        cy.intercept('GET','**/tags',{fixture:'tags.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.get('.tag-list').should('contain','cypress').and('contain','testing').and('contain','automation')
    })
 
    it('Global Feed Article testing',function(){
        cy.intercept('GET','**/articles*',{fixture:'article.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain','Demo-Article')
    })
})