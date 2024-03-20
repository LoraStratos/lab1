describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Негативная регистрация
        cy.get('[href="/registration"] > .button').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('TestLogin')
        cy.get('.form-input--email').type('TestExample@mail.ru')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('TestPassword123')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('TestPassword123')
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(4)').click()
        cy.get(':nth-child(1) > .form-error').should('exist')
        cy.log('Такой логин уже существует!')
        cy.get(':nth-child(2) > .form-error').should('exist')
        cy.log('Эта почта уже занята!')
    })
})