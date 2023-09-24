class CartPage {
  visit() {
    cy.visit("/view_cart");
  }

  verifyData() {
    cy.get("tr")
      .eq(1)
      .within(() => {
        debugger;
        const price = parseInt(
          cy.get(".cart_price").within(() => {
            cy.get("p")
              .invoke("text")
              .then((text) => {
                text.replace(/[^0-9.]/g, "");
              });
          })
        );
        cy.log("this is the price", price);
        const quantity = parseInt(
          cy.get(".cart_quantity").within(() => {
            cy.get("button").invoke("text");
          })
        );
        cy.log("**" + price + "##" + quantity);
        const total = price * quantity;
        cy.log("total", total);
        cy.get(".cart_total_price").should("have.text", `Rs. ${total}`);
      });
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
    this.getCheckoutButton().click()
  }
}

export default CartPage;
