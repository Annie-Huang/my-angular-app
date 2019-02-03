describe('Radio button group', () => {

  beforeEach(function () {
    cy.viewport(1000, 1300);
    cy.visitEAUIPage('/#/radiobuttongroup');
  });

  context('Form submission', () => {
    it('Submit with choose a radio button', () => {
      cy.get('[name="device-installed"] label:first')
        .click();

      cy.get('button').contains('Submit')
        .click()
        .get('p')
        .contains('"deviceInstalled": "yes"')
        .should('be.visible');

      cy.get('eui-field-errors div')
        .should('not.exist');
    });

    it('Submit without choose a radio button', () => {
      cy.get('button').contains('Submit')
        .click()
        .get('eui-field-errors div')
        .and('contain', 'Please choose a value');
    });
  });

});
