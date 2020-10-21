context('Docs', () => {
  beforeEach(() => {
    cy.visit('/features/chat');
    cy.get('.PageHeader').as('PageHeader');
    cy.get('.DocsMain').as('DocsMain');
    cy.get('.DocsNav').as('DocsNav');
    cy.get('.DocsActions').as('DocsActions');
  });

  it('can render', () => {
    cy.get('@PageHeader').should('exist');
    cy.get('@DocsMain').should('exist');
    cy.get('@DocsNav').should('exist');
    cy.get('@DocsActions').should('exist');
  });

  it('can toggle preview in standard view', () => {
    cy.get('@DocsNav').contains('Preview').click();
    cy.get('.DocsPreviewStandard').should('exist');
  });

  it('can toggle preview in modal view', () => {
    cy.get('@DocsNav').contains('Preview').click();
    cy.get('@DocsActions').get('svg[aria-label="Expand"]').click();
    cy.get('.DocsPreviewModal').should('exist');
  });

  it('can toggle preview in component view', () => {
    cy.get('@DocsNav').contains('Preview').click();
    cy.get('@DocsActions').get('svg[aria-label="Cubes"]').click();
    cy.get('.DocsComponents').should('exist');
  });

  it('can toggle about', () => {
    cy.get('@DocsNav').contains('About').click();
    cy.get('.DocsAbout').should('exist');
  });

  it('can toggle code', () => {
    cy.get('@DocsNav').contains('Code').click();
    cy.get('.DocsCode').should('exist');
  });

  it('can toggle domain', () => {
    cy.get('@DocsNav').contains('Domain').click();
    cy.get('.DocsDomain').should('exist');
  });

  it('can toggle props', () => {
    cy.get('@DocsNav').contains('Props').click();
    cy.get('.DocsProps').should('exist');
  });

  it('can update themes', () => {
    cy.get('@DocsNav').contains('Preview').click();
    cy.get('.DocsPreviewActionTheme').click();
    cy.get('button').contains('paradise').click();
    cy.get('button')
      .contains('New Message')
      .should('have.css', 'background-color', 'rgb(238, 66, 102)');
    cy.url().should('include', '?theme=paradise');
  });
});
