describe('Hooks Basics',function () {

    before(function (){
        cy.log('Before block')
    })  

    beforeEach(function (){
        cy.log('Before block Each block')
    }) 

    it('Search item',function () {
        cy.log('This is Seach item block')
    })

    it('Order item',function () {
        cy.log('This is Order item block')
    })

    it('Check out item',function () {
        cy.log('This is Check out item block')
    })

    afterEach(function (){
        cy.log('Before block')
    }) 

    after(function (){
        cy.log('Before block')
    })  
})