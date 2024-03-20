describe('template spec', () => {
    it('Data already in use', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная регистрация с уже занятамы логином и почтой
        cy.get('[href="/registration"] > .button').click() // жмяк на кнопку "Регистрироваться"
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('TestLogin') // пишет логин
        cy.get('.form-input--email').type('TestExample@mail.ru') // пишет почту
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('TestPassword123') // пишет пароль
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('TestPassword123') // повторяет пароль
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(4)').click() // жмяк на кнопку "Далее"
        cy.get(':nth-child(1) > .form-error > span').should('exist', 'Такое значение поля логин уже существует.') // проверка, что такой логин уже есть
        cy.get(':nth-child(2) > .form-error > span').should('exist', 'Такое значение поля почта уже существует.') // проверка, что такая почта уже используется
    })

})