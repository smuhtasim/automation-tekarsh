class PaymentPage {
  visit() {
    cy.visit("/payment");
  }

  getCardName() {
    return cy.get('input[data-qa="name-on-card"]');
  }

  getCardNumber() {
    return cy.get('input[data-qa="card-number"]');
  }

  getCardCVC() {
    return cy.get('input[data-qa="cvc"]');
  }

  getCardExpMonth() {
    return cy.get('input[data-qa="expiry-month"]');
  }

  getCardExpYear() {
    return cy.get('input[data-qa="expiry-year"]');
  }

  fillCard(params) {
    this.getCardName().type(params.cName)
    this.getCardNumber().type(params.cNumber);
    this.getCardCVC().type(params.cCVC);
    this.getCardExpMonth().type(params.cMonth)
    this.getCardExpYear().type(params.cYear);
  }

  clickPay() {
    cy.get("#submit").click();
  }
}

export default PaymentPage