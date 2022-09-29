import HomePage from "../support/page-objects/home-page"

describe("Home page", () => {
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"))
    cy.confirmCookies()
  })

  it("TC1: Verify the collection page", () => {
    homePage.exploreCollection()
  })
})
