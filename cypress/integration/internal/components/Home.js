context('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can render', () => {
    cy.get('main').within(() => {
      cy.contains('Starter Apps');
      cy.contains('Features');
      cy.contains('Shells');
    });
  });

  it.skip('can toggle filter menu', () => {
    cy.get('body input[type="checkbox"]').should('not.exist');
    cy.get('button').contains('filter').click();
    cy.get('body input[type="checkbox"]').should('exist');
    cy.get('main').contains('Starter Apps').click();
    cy.get('body input[type="checkbox"]').should('not.exist');
  });

  it.skip('can apply filters', () => {
    cy.get('main button').contains('filter').click();
    cy.contains('Modules')
      .parent()
      .within(() => {
        cy.get('label').contains('Social Media').click();
      });
    cy.get('main').contains('Starter Apps').click();
    cy.get('main').contains('Filtered By').should('exist');
    cy.get('main')
      .contains('Features')
      .parent()
      .within(() => {
        cy.get('a').should('exist');
        cy.get('a').eq(2).should('not.exist');
      });
  });

  it.skip('can clear filters', () => {
    cy.get('main button').contains('filter').click();
    cy.contains('Modules')
      .parent()
      .within(() => {
        cy.get('label').contains('Social Media').click();
      });
    cy.get('main').contains('Starter Apps').click();
    cy.get('button').contains('Clear').click();
    cy.get('main')
      .contains('Features')
      .parent()
      .within(() => {
        cy.get('a').should('exist');
        cy.get('a').eq(2).should('exist');
      });
  });
});
