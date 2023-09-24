class CartPage {
  constructor() {
    this.PRICE = 0;
    this.QUANTITY = 0
  }

  visit() {
    cy.visit("/view_cart");
  }

  calculateTotal(price, quantity) {
    return price * quantity;
  }

  verifyData() {
    cy.get("tr")
      .eq(1)
      .within(() => {
        cy.get(".cart_price p")
          .invoke("text")
          .then((text) => {
            this.PRICE = parseInt(text.match(/-?\d+/)[0], 10);
          });

        cy.get(".cart_quantity button")
          .invoke("text")
          .then((text) => {
            this.QUANTITY = parseInt(text.match(/-?\d+/)[0], 10);
          });
      });

    const total = this.PRICE * this.QUANTITY;

    cy.get(".cart_total_price").should("have.text", `Rs. ${total}`);
  }

  selectProduct() {
    cy.get(".cart_description")
      .eq(0)
      .within(() => {
        cy.get("a").click();
      });
  }

  getCheckoutButton() {
    return cy.get(".btn btn-default check_out");
  }

  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }
}

export default CartPage;
