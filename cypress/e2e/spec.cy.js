describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
    // Позитивная авторизация
    cy.get('[href="/login"] > .button').click()
    cy.wait(1000)
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.wait(1000)
    cy.get(':nth-child(3) > .button').click()
    cy.get(':nth-child(2) > .menu-item__item-name').should('exist')
  })
})