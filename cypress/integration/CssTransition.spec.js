describe('CssTransition', ()=>{
    it('css transition works', ()=>{
        testCSSTranstion()
    })
    it('css transition works when cy.clock is used', ()=>{
        cy.clock(0)
        testCSSTranstion()
    })
})

function testCSSTranstion(){
    cy.visit('http://localhost:3000/')
    cy.contains('Show Message').click()
    cy.contains('This alert message is being transitioned in and out of the DOM.')
    cy.get('.btn-primary').click()
    cy.contains('Show Message') // This fails when clock is used. Why?
}