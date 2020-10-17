context('AppShell', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('header').as('header')
    cy.get('nav').as('nav')
    cy.get('main').as('main')
  })

  context('AppShellSidebar', () => {
    it('can render logo', () => {
      cy.get('@header').find('svg').should('be.visible')
    })

    it('can render nav', () => {
      cy.get('@nav').should('be.visible')
    })

    it('can render nav sections', () => {
      cy.get('@nav').contains('Features')
      cy.get('@nav').contains('Shells')
    })

    it('can expand nav sections', () => {
      cy.get('@nav').contains('Store').should('not.be.visible')
      cy.get('@nav').contains('Commerce').click()
      cy.get('@nav').contains('Store').should('be.visible')
    })
  })

  context('AppShellMain', () => {
    it('can render content', () => {
      cy.get('@main').should('not.be.empty')
    })
  })
})
