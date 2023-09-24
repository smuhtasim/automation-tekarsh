class LoginPage {
  visit() {
    cy.visit("/login");
  }

  getLoginEmail() {
    return cy.get('input[data-qa="login-email"]');
  }

  getLoginPassword() {
    return cy.get('input[data-qa="login-password"]');
  }

  loginUser(params) {
    this.visit()
    this.getLoginEmail().type(params.email)
    this.getLoginPassword().type(params.password)
    this.clickLogin()
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