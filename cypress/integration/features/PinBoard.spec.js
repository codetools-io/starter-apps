context('PinBoard', () => {
  beforeEach(() => {
    cy.visit('/features/pin-board')
  })


  it('can render', () => {
    cy.get('.PinBoard')
  })
})
