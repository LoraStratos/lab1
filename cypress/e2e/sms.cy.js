describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Добавление роли студенту
        cy.get('[href="/login"] > .button').click()
        cy.wait(1000)
        cy.get('.form-input--text').type('LoraStratos')
        cy.get('.form-input--password').type('Eujkm1') // Уголь1
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click()
        cy.wait(1000)
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click()
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').should('exist')
    })
})