describe('template spec', () => {
    it('Notifications', () => {
        cy.visit('https://dev.profteam.su/')
        // Проверка уведомлений
        cy.get('[href="/login"] > .button').click() // жмяк на "Авторизация"
        cy.wait(1000)
        cy.get('.form-input--text').type('LoraStratos') // пишет логин
        cy.get('.form-input--password').type('Eujkm1') // пишет пароль - Уголь1
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click() // жмяк на "Вход"
        cy.wait(1000)
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click() // жмяк на колокольчик
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click() // жмяк на "прочитать все"
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__items > .notification-item').should('exist') // проверка, что уведомления есть
    })
})