context('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('can render', () => {
    cy.get('main').contains('Starter Apps')
    cy.get('main').contains('Features')
    cy.get('main').contains('Shells')
  })
})
