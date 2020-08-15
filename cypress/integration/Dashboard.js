// const autoRecord = require('../plugins/autorecord');

describe('Dashboard', function () {
  // autoRecord();
  beforeEach(function () {
    cy.useLogin();
  });
  it('loads', function () {
    cy.visit('/dashboard');
    cy.contains('Starter App');
    cy.contains('Dashboard');
    cy.contains('logout');
  });
});
