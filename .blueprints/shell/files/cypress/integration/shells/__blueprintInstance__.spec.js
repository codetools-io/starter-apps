context('{{blueprintInstance}}', () => {
  beforeEach(() => {
    cy.visit('/shells/{{blueprintInstance_DashedFormat}}')
  })


  it('can render', () => {
    cy.get('.{{blueprintInstance}}')
  })
})
