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

  signupUser(params) {
    this.getSignupName().type(params.name)
    this.getSignupEmail().type(params.email)
    this.clickSignup()
  }

  clickLogin() {
    cy.get('button[data-qa="login-button"]').click();
  }
  
  getSignupName() {
    return cy.get('input[data-qa="signup-name"]');
  }

  getSignupEmail() {
    return cy.get('input[data-qa="signup-email"]');
  }

  clickSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }
}

export default LoginPage