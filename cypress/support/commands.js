/// <reference types="cypress" />

// ******************************************************************************************
//To confirm Cookies popup
Cypress.Commands.add("confirmCookies", () => {
  cy.get("body").then(($body) => {
    if ($body.find(".cookie-banner .grid-container").length === 1) {
      cy.contains("Akkoord").click()
    }
  })
})
