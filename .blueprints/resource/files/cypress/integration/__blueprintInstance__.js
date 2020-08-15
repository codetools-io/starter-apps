describe('{{blueprintInstance}}', () => {
  it('loads', () => {
    cy.visit('/{{blueprintInstance}}');
    cy.contains('{{blueprintInstance}}');
  });
});
