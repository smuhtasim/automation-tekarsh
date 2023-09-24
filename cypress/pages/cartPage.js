class CartPage {
  constructor() {
    this.PRICE = 0;
    this.QUANTITY = 0
  }

  visit() {
    cy.visit("/view_cart");
  }


  
  async verifyData() {
     cy.get("tr")
      .eq(1)
      .within(() => {
        cy.get(".cart_price p")
          .invoke("text")
          .then((text) => {
            this.PRICE = parseInt( text.replace(/[^0-9+\-*/]/g, ""), 10);
            cy.log("%%",this.PRICE)
          });
        debugger;
        var quantity = cy.get(".cart_quantity button").invoke("text")
        cy.log("&*",quantity)
        //   .then((text) => {
        //     this.QUANTITY = parseInt(text.replace(/[^0-9+\-*/]/g, ""), 10);
        //     cy.log("##", this.QUANTITY);
        //   });
        this.QUANTITY = parseInt(quantity.replace(/[^0-9+\-*/]/g, ""), 10);
      });

     cy.get(".cart_total_price").should("have.text", `Rs. ${this.PRICE * this.QUANTITY}`);
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
