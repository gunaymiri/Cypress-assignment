import file from "../../fixtures/credentials.json"
import locators from "../page-objects/selectors.json"

class CollectionPage {
  getSearchResults(searchItem) {
    let quantity
    cy.get(locators.collection.searchInput).type(`${searchItem}{enter}`)
      cy.get(locators.collection.resultQuantity).then((element) => {
        quantity = element.text()
        assert.isAbove(parseInt(quantity), 70, "Results are greater than 70")
      })
  }

  getObjectData(collectionItem) {
    cy.get(locators.collection.searchInput).type(`${collectionItem}{enter}`)
      cy.get(locators.collection.firstPainting).click()
      cy.get(locators.collection.objectDataBtn).click()
      cy.screenshot(locators.collection.firstPainting)
      cy.get(locators.collection.objectProperty).find(locators.collection.objectPropertyValue).eq([0]).should("have.text", file.fnummer)
      cy.get(locators.collection.objectProperty).find(locators.collection.objectPropertyValue).eq([1]).should("have.text", file.jhnummer)
      cy.get(locators.collection.objectProperty).find(locators.collection.objectPropertyValue).eq([2]).should("have.text", file.inventarisnummer)
  }
}

export default CollectionPage
