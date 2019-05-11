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

import 'cypress-testing-library/add-commands';

Cypress.Commands.add('openBot', botName => {
  cy.getByText('Open').click();
  cy.getByText(botName).click();
  cy.getByText('bot.botproj').click();
  cy.wait(500);
});

Cypress.Commands.add('withinEditor', (editorName, cb) => {
  cy.get(`iframe[name="${editorName}"]`).then(editor => {
    cy.wrap(editor.contents().find('body')).within(cb);
  });
});

Cypress.Commands.add('openDialog', dialogName => {
  cy.get('[data-testid="ProjectTree"]').within(() => {
    cy.getByText(dialogName).click();
    cy.wait(500);
  });
});