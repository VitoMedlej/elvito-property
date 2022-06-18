


describe('Scrolling',()=>{
    it('scrolls back to top of the page ',()=>{
        cy.visit(process.env.NEXT_PUBLIC_SITE_URL)
        cy.scrollTo(0, 500)
        cy.get('[data-cy=STT]').click()
        cy.wait(1000)
        expect(window.scrollY).to.equal(0)
    })
})