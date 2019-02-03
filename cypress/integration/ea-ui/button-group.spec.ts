describe('Button group', () => {

  beforeEach(function () {
    cy.viewport(1000, 1300);
    cy.visitEAUIPage('/#/buttongroup');
  });

  context('Form submission', () => {
    it('Submit with choose choose a button in button group', () => {
      cy.get('[name="fuel-type-field"] label:first')
        .click();

      cy.get('button').contains('Submit')
        .click()
        .get('p')
        .contains('"fuelType": "BOTH"')
        .should('be.visible');

      cy.get('eui-field-errors div')
        .should('not.exist');
    });

    it('Submit without choose a button in button group', () => {
      cy.get('button').contains('Submit')
        .click()
        .get('eui-field-errors div')
        .and('contain', 'Please choose your fuel type');
    });
  });

});
