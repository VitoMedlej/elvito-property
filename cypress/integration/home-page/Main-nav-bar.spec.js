describe('Navigation', () => {
    it('navigates back to top of the home page ', () => {
        cy.visit('http://localhost:3000/')
        cy
            .get('[data-cy=logo]')
            .click()
        cy
            .url()
            .should('include', '/')
    })
})