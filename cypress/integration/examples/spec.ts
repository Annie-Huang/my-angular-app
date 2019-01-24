// cypress/integration/spec.ts
it('loads', () => {
  // cy.visit('http://localhost:4201');
  cy.visit('');
  cy.get('app-root h1').contains('Welcome to my-angular-app!');
});

// cypress/integration/spec.ts
import { navigateToMyAngularApp, getGreeting } from '../../support/po';

describe('Hello Angular', () => {
  beforeEach(navigateToMyAngularApp);

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-angular-app!');
  });

  it('has 3 links', () => {
    cy.get('app-root li a').should('have.length', 3);
  });
});
