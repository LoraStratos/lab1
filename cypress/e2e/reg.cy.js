describe('template spec', () => {
    it('Registration', () => {
        cy.visit('https://dev.profteam.su/')
        // Регистрация с позитивными данными
        cy.get('[href="/registration"] > .button').click() // жмяк на кнопку "Регистрироваться"
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('TestLoginSix') // пишет логин
        cy.get('.form-input--email').type('TestExampleSix@mail.ru') // пишет почту
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('TestPassword123') // пишет пароль
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('TestPassword123') // повторяет пароль
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(4)').click() // жмяк на кнопку "Далее"
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Фамилия') // пишет фамилию
        cy.get('[style=""] > :nth-child(2) > .form-control--medium > .form-input--text').type('Имя') // пишет имя
        cy.get('[style=""] > :nth-child(3) > .form-control--medium > .form-input--text').type('Отчество') // пишет отчество
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(3)').click() // жмяк на кнопку "Создать аккаунт"
        cy.url().should('include', '/account/main') // проверка, что мы на нужной странице
        cy.wait(1000)
        cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button').click() // жмяк на "Выйти"
    })
})