describe('CssTransition', ()=>{
    it('calls callbacks', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Show Message').click()
    })
    }
)