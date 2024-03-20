describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная авторизация 1
        cy.get('[href="/login"] > .button').click()
        cy.wait(1000)
        cy.get('.form-input--text').type('testerStudent')
        cy.get('.form-input--password').type('Password')
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click()
        cy.get('.form-error').should('exist')
    })
})