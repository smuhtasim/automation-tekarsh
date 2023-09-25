class CartPage {
  constructor() {
    this.PRICE = 0;
    this.QUANTITY = 0;
  }

  setPrice(price) {
    this.PRICE = price;
  }

  setQuantity(quantity) {
    this.QUANTITY = quantity;
  }

  visit() {
    cy.visit("/view_cart");
  }

  verifyData() {
    cy.get("tr")
      .eq(1)
      .within(() => {
        cy.get(".cart_price p")
          .invoke("text").as('price')
          .then((text) => {
            this.setPrice(parseInt(text.replace(/[^0-9+\-*/]/g, ""), 10));
            cy.log("%%", this.PRICE);
          });

        cy.get(".cart_quantity button")
          .invoke("text").as('quantity')
          .then((text) => {
            this.setQuantity((text.replace(/[^0-9+\-*/]/g, ""), 10));
            cy.log("##", this.QUANTITY);
          });
        cy.get(".cart_total_price").should(
          "have.text",
          `Rs. ${this.PRICE * this.QUANTITY}`
        );
      });
    cy.wait(5000);
  }

  selectProduct() {
    cy.get(".cart_description")
      .eq(0)
      .within(() => {
        cy.get("a").click();
      });
  }

  getCheckoutButton() {
    return cy.get(".col-sm-6 > .btn");
  }

  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }
}

export default CartPage;
