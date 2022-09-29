import CollectionPage from "../support/page-objects/collection-page"

describe("Collection page", () => {
  const collectionPage = new CollectionPage()

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("collectionPath"))
    cy.confirmCookies()
  })

  it("TC2: Verify to get >70 results for “Het Gele Huis” painting", () => {
    collectionPage.getSearchResults("Het Gele Huis")
  })

  it("TC3: Verify the object data for 'Het Gele Huis' painting", () => {
    collectionPage.getObjectData("Het Gele Huis")
  })

})