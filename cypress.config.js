const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c44x4b',
   reporter: 'mochawesome',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  retries: {
    runMode: 2
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*.js",
    env: {
      baseUrl: "https://www.vangoghmuseum.nl",
      collectionPath: "/nl/collectie"
    }
  }
})
