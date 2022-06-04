beforeEach('Launch site', () => {
    cy.visit(`http://localhost:3000/account/register`)
})

describe('Test creating account', () => {
    it('tries to create an existing  ', () => {
        cy
            .get('[data-cy=create-email]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('test@email.com')
                    .should('have.value', 'test@email.com')               
            })


            cy
            .get('[data-cy=create-name]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('test-name')
                    .should('have.value', 'test-name')               
            })
            cy
            .get('[data-cy=create-password]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('test-password')
                    .should('have.value', 'test-password')               
            })    
            cy.get('[data-cy=submit-btn').click() 
            cy.get('[data-cy=form-info').should('contain','Error')
      
    })
})



// testing inputs to make sure a user cant submit when they enter invalid creds
describe('Checks form validation',()=>{
    it('checks form inputs  ', () => {
        cy
            .get('[data-cy=create-email]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('t')             
            })


            cy
            .get('[data-cy=create-name]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('t')
                   
            })
            cy
            .get('[data-cy=create-password]')
            .within(() => {
                cy
                    .get("div")
                    .children()
                    .get('input')
                    .type('t')
                   
            })    
            cy.get('[data-cy=submit-btn').click() 
            cy.get('[data-cy=form-info').should('have.css','color','rgb(255, 0, 0)')
      
    })
})