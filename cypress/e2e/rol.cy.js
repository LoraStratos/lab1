describe('template spec', () => {
    it('Change role', () => {
        cy.visit('https://dev.profteam.su/')
        // Добавление роли студенту
        cy.get('[href="/login"] > .button').click() // Жмяк на "Авторизация"
        cy.wait(1000)
        cy.get('.form-input--text').type('LoraStratos') // пишет логин
        cy.get('.form-input--password').type('Eujkm1') // пишет пароль - Уголь1
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click() // жмяк на "Вход"
        cy.get('.page-nav__role-block > .button').click() // жмяк на "Выбрать роль"
        cy.wait(1000)
        cy.get('.select-role-form > :nth-child(3)').click() // жмяк на "Я являюсь студентом"
        cy.wait(1000)
        cy.get('.menu-item__name').should('exist', 'Студент') // проверка, что роль = Студент
        cy.get('[data-v-02661ece=""][data-v-4e40dec7=""] > .form__buttons > .button').click() // жмяк на "Сбросить роль"
    })
})