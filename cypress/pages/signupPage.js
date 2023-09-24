class SignupPage {
  checkTitle() {
    cy.get("#id_gender1").check();
  }

  getPassword() {
    return cy.get('input[data-qa="password"]');
  }

  getBirthDate() {
    return cy.get("#days");
  }

  getBirthMonth() {
    return cy.get("#months");
  }

  getBirthYear() {
    return cy.get("#years");
  }

  checkNews() {
    cy.get("#newsletter").check();
  }

  checkOffers() {
    cy.get("#optin").check();
  }

  getFirstName() {
    return cy.get("#first_name");
  }

  getLastName() {
    return cy.get("#last_name");
  }

  getCompany() {
    return cy.get("#company");
  }

  getAddress1() {
    return cy.get("#address1");
  }

  getAddress2() {
    return cy.get("#address2");
  }

  getCountry() {
    return cy.get("#country");
  }

  getState() {
    return cy.get("#state");
  }

  getCity() {
    return cy.get("#city");
  }

  getZipcode() {
    return cy.get("#zipcode");
  }

  getMobileNumber() {
    return cy.get("#mobile_number");
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }

  createNewUser(params) {
    this.checkTitle();
    this.getPassword().type(params.password);
    this.getBirthDate().select(params.date);
    this.getBirthMonth().select(params.month);
    this.getBirthYear().select(params.year);
    this.checkNews();
    this.checkOffers();
    this.getFirstName().type(params.fname);
    this.getLastName().type(params.lname);
    this.getCompany().type(params.company);
    this.getAddress1().type(params.address1);
    this.getAddress2().type(params.address2);
    this.getCountry().select(params.country);
    this.getState().type(params.state);
    this.getCity().type(params.city);
    this.getZipcode().type(params.zipcode);
    this.getMobileNumber().type(params.mobileNumber);
    this.clickCreateAccount();
  }
}

export default SignupPage