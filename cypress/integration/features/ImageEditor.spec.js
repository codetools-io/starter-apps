context('ImageEditor', () => {
  beforeEach(() => {
    cy.visit('/features/image-editor')
  })


  it('can render', () => {
    cy.get('.ImageEditor')
  })
})
