describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная авторизация 2
        cy.get('[href="/login"] > .button').click()
        cy.wait(1000)
        cy.get('.form-input--text').type('testerStudent')
        cy.get('.form-input--text').clear()
        cy.get('.form-error').should('exist')
    })
})