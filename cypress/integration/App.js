describe('App', function () {
  it('loads', function () {
    cy.visit('/');
    cy.contains('Starter App');
  });
});
