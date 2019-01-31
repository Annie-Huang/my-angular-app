describe('Responsive design', () => {

  it('loads desktop', () => {
    cy.viewport('macbook-15');
    cy.visitEAUIPage('/#/responsive-design');

    // cypress only support rgb for color comparision at the moment.
    // See https://github.com/cypress-io/cypress/issues/2186
    cy.get('.test-responsible-design')
      .should('have.css', 'background-color')
      .and('equal', 'rgb(127, 255, 212)'); // aquamarine
  });

  it('loads mobile', () => {
    cy.viewport('iphone-6');
    cy.visitEAUIPage('/#/responsive-design');

    cy.get('.test-responsible-design')
      .should('have.css', 'background-color')
      .and('equal', 'rgb(221, 160, 221)'); // plum
  });
});
