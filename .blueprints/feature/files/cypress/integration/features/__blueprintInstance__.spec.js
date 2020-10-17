context('{{blueprintInstance}}', () => {
  beforeEach(() => {
    cy.visit('/features/{{blueprintInstance_DashedFormat}}')
  })


  it('can render', () => {
    cy.get('.{{blueprintInstance}}')
  })
})
