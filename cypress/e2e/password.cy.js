describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su');
        cy.get('[href="/login"] > .button').click();
        cy.wait(1000);
        cy.get('.form-input--text').type('LoraStratos');
        cy.get('.form-input--password').type('Eujkm1'); // Уголь1
        cy.wait(1000);
        cy.get(':nth-child(3) > .button').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').type('Eujkm2'); // Уголь2
        cy.get(':nth-child(2) > .form-input--password').type('Eujkm2'); // Уголь2
        cy.wait(1000)
        cy.get('.form__buttons > div > .button').click();
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').clear()
        cy.get(':nth-child(2) > .form-input--password').clear()
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').type('Eujkm1'); // Уголь1
        cy.get(':nth-child(2) > .form-input--password').type('Eujkm1'); // Уголь1
        cy.wait(1000)
        cy.get('.form__buttons > div > .button').click();
        cy.log('Пароль успешно заменён туда и обратно!')
    })
})