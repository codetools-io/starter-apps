context('Home', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main').as('main')
    cy.get('body').as('body')
  })

  it('can render', () => {
    cy.get('@main').within(() => {
      cy.contains('Starter Apps')
      cy.contains('Features')
      cy.contains('Shells')
      cy.contains('filter')
      cy.get('svg[aria-label="Github"]')
      cy.get('svg[aria-label="Twitter"]')
    })
  })

  it('can toggle filter menu', () => {
    cy.get('@body').get('input[type="checkbox"]').should('not.exist')
    cy.get('@main').contains('filter').click()
    cy.get('@body').get('input[type="checkbox"]').should('exist')
    cy.get('@body').click()
    cy.get('@body').get('input[type="checkbox"]').should('not.exist')
  })

  it('can filter items', () => {
    cy.get('@main').contains('filter').click()
    cy.contains('Modules').parent().within(() => {
      cy.contains('Social Media').click()
    })
    cy.get('@body').click()
    cy.get('@main').contains('Features').parent().within(() => {
      cy.get('a').should('exist')
      cy.get('a').eq(2).should('not.exist')
    })
  })


})
