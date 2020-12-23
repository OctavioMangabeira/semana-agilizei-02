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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0rWhW4kIAn0SBbkDpb%2FZZUD%2BpaWzzDZAO7KzFpgcFfVfrYAaBl1cHHKXFdbEi6%2FXmYHFVi%2BV0a6lMTamJH936iR0aB2BbmDH%2FwwIcXvR%2F3oZspEVekoVPFMewFOEObPmsN8SgG2004u9tDtaPxWEZn3Dh5vAa69w2HM4oOVvnl%2FM0frqkLvFNwFAdfH2njTifQJxhE%2ByVpAh3Uw%2B3zOF0Wyr%2Fz%2BWWchEOFGraFttikn4kHB39aq3tGTAQ4ytDhLPQMfFDd%2FxHRTirZkprXPa9SYeX1hEy1p4%2Bi%2FgzEDzr5uSokMaU%2BAJdRwScmSzbHSluEvcLWFA5Rcz%2BWpVlIRqp7FDRIv0qUQgdGUQ6cXJfQWxw3yoEznNVh2G%2BYKYI7ExObC%2B1zgwQ4auZTVoKePLNA4%3D000311'
    )
})
