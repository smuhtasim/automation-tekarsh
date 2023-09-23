class HomePage {
  visit() {
    cy.visit("/");
  }

  isHomePageVisible() {
    return cy.get("body").contains("AutomationExercise").should("be.visible");
  }
}

export default HomePage;