describe('Dropdown', () => {

  beforeEach(function () {
    cy.viewport(1000, 1300);
    cy.visitEAUIPage('/#/dropdown');
  });

  context('Form submission', () => {
    it('Submit with choose a dropdown option', () => {
      cy.get('[name="my-option-field"] label')
        .click()
        .get('[name="my-option-field"] ul li:first')
        .click();

      cy.get('button').contains('Submit')
        .click()
        .get('p')
        .contains('"myOption": "option_1"')
        .should('be.visible');

      cy.get('eui-field-errors div')
        .should('not.exist');
    });

    it('Submit without choose a dropdown option', () => {
      cy.get('button').contains('Submit')
        .click()
        .get('eui-field-errors div')
        .and('contain', 'Please choose an option');
    });
  });

});
