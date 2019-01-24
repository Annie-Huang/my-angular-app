// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Command.add('login', () => {
//   cy.request({
//     method: 'POST',
//     url: '/login_with_form', // baseUrl is prepended to url
//     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
//     body: {
//       username: 'jane.lane',
//       password: 'password123'
//     }
//   })
//     .then((resp) => {
//       window.localStorage.setItem('jwt', resp.body.user.token);
//     })
// });
//

//
// declare visitPage Cypress {
//   interface Chainable<Subject> {
//     visitPage(value: string): Chainable<Subject>
//   }
// }
//
// Cypress.Command.add('visitPage', (path) => {
//     cy.visit('http://localhost:4200'+path);
// });


declare namespace Cypress {
  interface Chainable<Subject> {
    visitEAUIPage: typeof visitEAUIPage; // more DRY than the following:
    // myCustomCommand(value: string): Cypress.Chainable<JQuery>
  }
}

function visitEAUIPage(path: string): Cypress.Chainable<Window> {
  return cy.visit('http://localhost:4200' + path);
}

Cypress.Commands.add('visitEAUIPage', visitEAUIPage);
