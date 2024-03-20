describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        // Добавление роли студенту
        cy.get('[href="/login"] > .button').click()
        cy.wait(1000)
        cy.get('.form-input--text').type('LoraStratos')
        cy.get('.form-input--password').type('Eujkm1') // Уголь1
        cy.wait(1000)
        cy.get(':nth-child(3) > .button').click()
        cy.get('.page-nav__role-block > .button').click()
        cy.wait(1000)
        cy.get('.select-role-form > :nth-child(3)').click()
        cy.log('Роль студента добавлена!')
    })
})