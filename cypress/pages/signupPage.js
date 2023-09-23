class SignupPage {
  setTitle() {
    cy.get("#id_gender1").check();
  }

  setPassword(password) {
    cy.get('input[data-qa="password"]').type(password);
  }

  setBirthDate(date) {
    cy.get("#days").select(date);
  }

  setBirthMonth(month) {
    cy.get("#months").select(month);
  }

  setBirthYear(year) {
    cy.get("#years").select(year);
  }

  checkNews() {
    cy.get("#newsletter").check();
  }

  checkOffers() {
    cy.get("#optin").check();
  }

  setFirstName(fname) {
    cy.get("#first_name").type(fname);
  }

  setLastName(lname) {
    cy.get("#last_name").type(lname);
  }

  setCompany(company) {
    cy.get("#company").type(company);
  }

  setAddress(address1, address2) {
    cy.get("#address1").type(address1);
    cy.get("#address2").type(address2);
  }

  setCountry(country) {
    cy.get("#country").select(country);
  }

  setState(state) {
    cy.get("#state").type(state);
  }

  setCity(city) {
    cy.get("#city").type(city);
  }

  setZipcode(zipcode) {
    cy.get("#zipcode").type(zipcode);
  }

  setMobileNumber(mobileNumber) {
    cy.get("#mobile_number").type(mobileNumber);
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }
}

export default SignupPage