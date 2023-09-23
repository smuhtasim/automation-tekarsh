class LoginPage {
  visit() {
    cy.visit("/login");
  }

  setLoginEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email);
  }

  setLoginPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  clickLogin() {
    cy.get('button[data-qa="login-button"]').click();
  }
  
  setSignupName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }

  setSignupEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }
}

export default LoginPage