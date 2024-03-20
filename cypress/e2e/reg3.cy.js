describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Регистрация с позитивными данными
        cy.get('[href="/registration"] > .button').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Login')
        cy.get('.form-input--email').type('Poshta@mail.ru')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('TestPassword123')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('TestPassword123')
        cy.wait(1000)
        cy.get('.form__buttons > :nth-child(4)').click()
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Фамилия')
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').clear()
        cy.get('.form-error').should('exist')
    })
})