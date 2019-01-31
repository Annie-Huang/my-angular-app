describe('Textfield', () => {
  const typedName = 'my account name';
  const typedPostcode = '3000';

  beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1000, 1300);
    // cy.visit('http://localhost:4200/#/textfield');
    cy.visitEAUIPage('/#/textfield');
  });

  it('loads', () => {
  });

  it('accepts input', () => {
    cy.get('#account-name-field')
      .type(typedName)
      .should('have.value', typedName);

    cy.get('#postcode-field')
      .type(typedPostcode)
      .should('have.value', typedPostcode);
  });

  context('Form submission', () => {
    it('Enters name and postcode on submit', () => {
      cy.get('#account-name-field')
        .type(typedName)
        .should('have.value', typedName);

      cy.get('#postcode-field')
        .type(typedPostcode)
        .should('have.value', typedPostcode);

      // cy.get('form')
      //   .submit();
      cy.get('button').contains('Submit')
        .click()
        .get('p')
        .contains('Yay! This form as been submitted!')
        .should('be.visible');

      cy.get('eui-field-errors div')
        .should('not.exist');
    });

    it('Not enter name and postcode on submit will generate error', () => {
      cy.get('button').contains('Submit')
        .click()
        .get('eui-field-errors div')
        .should('be.visible')
        .should('have.length', 2)
        .and('contain', 'Please enter a name')
        .and('contain', 'Please enter a postcode');
        // .its('length')
        // .should('equal', 2);

      // cy.get('div')
      //   .contains('Please enter a name')
      //   .should('be.visible');
      //
      // cy.get('div')
      //   .contains('Please enter a postcode')
      //   .should('be.visible');
    });

  });

});
