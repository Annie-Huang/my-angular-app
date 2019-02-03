describe('Textarea', () => {
  const typedIntroduction = 'my introduction';

  beforeEach(function () {
    cy.viewport(1000, 1300);
    cy.visitEAUIPage('/#/textarea');
  });

  context('Form submission', () => {
    it('Submit with enter textarea info', () => {
      cy.get('[name="introduction-field"] textarea')
        .type(typedIntroduction)
        .should('have.value', typedIntroduction);

      cy.get('button').contains('Submit')
        .click()
        .get('p')
        .contains('"introduction": "' + typedIntroduction + '"')
        .should('be.visible');

      cy.get('eui-field-errors div')
        .should('not.exist');
    });

    it('Submit without enter textarea info', () => {
      cy.get('button').contains('Submit')
        .click()
        .get('eui-field-errors div')
        .and('contain', 'Please add introduction');
    });
  });

});
