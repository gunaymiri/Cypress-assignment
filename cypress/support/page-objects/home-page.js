import locators from "../page-objects/selectors.json"

class HomePage {
  exploreCollection() {
      cy.get(locators.home.exploreCollectionBtn).click(),
      cy.url().should("include", "/collectie"),
      cy.get(locators.home.collectionHeader).should("have.text", "Collectie")
  }
}

export default HomePage
