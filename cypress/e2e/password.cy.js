describe('template spec', () => {
    it('Change password', () => {
        cy.visit('https://dev.profteam.su');
        // Смена пароля
        cy.get('[href="/login"] > .button').click(); // жмяк на "Авторизация"
        cy.wait(1000);
        cy.get('.form-input--text').type('LoraStratos'); // пишет логин
        cy.get('.form-input--password').type('Eujkm1'); // пишет пароль - Уголь1
        cy.wait(1000);
        cy.get(':nth-child(3) > .button').click(); // жмяк на "Вход"
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').type('Eujkm2'); // пишет новый пароль - Уголь2
        cy.get(':nth-child(2) > .form-input--password').type('Eujkm2'); // повторяет новый пароль - Уголь2
        cy.wait(1000)
        cy.get('.form__buttons > div > .button').click(); // жмяк на "Сохранить пароль"
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').clear() // стирает текст
        cy.get(':nth-child(2) > .form-input--password').clear() // стирает текст
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-input--password').type('Eujkm1'); // пишет старый пароль - Уголь1
        cy.get(':nth-child(2) > .form-input--password').type('Eujkm1'); // повторяет старый пароль - Уголь1
        cy.wait(1000)
        cy.get('.form__buttons > div > .button').click(); // жмяк на "Сохранить пароль"
        cy.get('.form__buttons > div > p').should('exist', 'Пароль успешно изменён!') // Проверка, что вылезло уведомление об успешной смене пароля
    })
})