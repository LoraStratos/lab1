describe('template spec', () => {
  it('Authorization', () => {
    cy.visit('https://dev.profteam.su/')
    // Позитивная авторизация
    cy.get('[href="/login"] > .button').click() // жмяк на кнопку "Авторизоваться"
    cy.wait(1000)
    cy.get('.form-input--text').type('testerStudent') // пишет логин
    cy.get('.form-input--password').type('Password1') // пишет пароль
    cy.wait(1000)
    cy.get(':nth-child(3) > .button').click() // жмяк на кнопку "Вход"
    cy.url().should('include', '/account/main') // проверка на той ли мы странице
    cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button').click() // жмяк на "Выйти"
  })
})