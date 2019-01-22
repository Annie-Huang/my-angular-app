// cypress/support/po.ts
// we could place this url into cypress.json as "baseUrl"
const eaComponentLibraryUrl = 'http://localhost:4200';
const myAngularAppUrl = 'http://localhost:4201';

export const navigateToEaComponentLibrary = () => cy.visit(eaComponentLibraryUrl);
export const navigateToMyAngularApp = () => cy.visit(myAngularAppUrl);

export const getGreeting = () => cy.get('app-root h1');

