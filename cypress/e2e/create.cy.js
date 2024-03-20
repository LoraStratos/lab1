describe('template spec', () => {
    it('Create vacancy', () => {
        cy.visit('https://dev.profteam.su/')
        // Создание вакансии
        cy.get('[href="/login"] > .button').click() // жмяк на "Авторизация"
        cy.wait(1000)
        cy.get('.form-input--text').type('testerEmployer') // пишет логин работадателя
        cy.get('.form-input--password').type('Password1') // пишет пароль
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click() // жмяк на "Вход"
        cy.get(':nth-child(7) > .menu-item__item-name').click() // жмяк на "Вакансии"
        cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click() // жмяк на "Создать вакансию"
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Вакансия', {force: true}) // пишет название вакансии
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > textarea').type('Требование') // пишет требование
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Обязанность') // пишет обязанности
        cy.wait(1000)
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > button').click({force: true}) // жмяк на "Создать вакансию"
        cy.get(':nth-child(2) > .menu-item__item-name').should('exist') // проверка, что вакансия появилась в списке созданных вакансий
    })
})