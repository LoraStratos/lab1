describe('template spec', () => {
    it('Incorrect login and password', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная авторизация 1
        cy.get('[href="/login"] > .button').click() // жмяк на кнопку "Авторизоваться"
        cy.wait(1000)
        cy.get('.form-input--text').type('testerStudent') // пишет логин
        cy.get('.form-input--password').type('Password') // пишет пароль
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click() // жмяк на кнопку "Вход"
        cy.get('.form-error').should('exist', 'Неверный логин или пароль, попробуйте заново.') // проверка, что неправильные логин и пароль
    })
})