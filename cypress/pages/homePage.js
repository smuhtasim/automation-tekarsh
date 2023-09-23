class HomePage {
  visit() {
    cy.visit("https://automationexercise.com/");
  }

  isHomePageVisible() {
    return cy.get("body").contains("AutomationExercise").should("be.visible");
  }
}

export default new HomePage();