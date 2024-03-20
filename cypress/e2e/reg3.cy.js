describe('template spec', () => {
    it('Registration, required fields', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная регистрация, проверка ошибки с обязательными полями
        cy.get('[href="/registration"] > .button').click() // жмяк на кнопку "Регистрироваться"
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Login') // пишет логин
        cy.get('.form-input--email').type('Poshta@mail.ru') // пишет почту
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('TestPassword123') // пишет пароль
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('TestPassword123') // повторяет пароль
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(4)').click() // жмяк на кнопку "Далее"
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Фамилия') // пишет фамилию
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').clear() // стирает текст
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Имя') // пишет имя
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').clear() // стирает текст
        cy.get(':nth-child(1) > .form-error').should('exist', 'Обязательное поле, кириллица, тире, апостроф и пробелы') // проверка, что обязательно написать фамилию
        cy.get(':nth-child(2) > .form-error').should('exist', 'Обязательное поле, кириллица, тире, апостроф и пробелы') // проверка, что обязательно написать имя
    })
})