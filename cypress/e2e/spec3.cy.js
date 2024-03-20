describe('template spec', () => {
    it('Authorization, required field', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная авторизация 2
        cy.get('[href="/login"] > .button').click() // жмяк на кнопку "Авторизоваться"
        cy.wait(1000)
        cy.get('.form-input--text').type('testerStudent') // пишет логин
        cy.get('.form-input--text').clear() // стирает текст
        cy.get('.form-error').should('exist', 'Обязательное поле, без пробелов') // проверка, что обязательные поля
    })
})