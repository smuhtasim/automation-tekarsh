class CheckoutPage {
  visit() {
    cy.visit("/checkout");
  }

  removePart(string) {
    const indexOfAddress = string.indexOf("address");

    // Extract the part of the string after "address"
    const resultString = string.substring(indexOfAddress + "address".length);

    return resultString
  }

  verifyAddress() {
    cy.get("#address_delivery").as("list1"); // Replace '.list1' with your selector
    cy.get("#address_invoice").as("list2"); // Replace '.list2' with your selector

    // Step 2: Get the text content of both lists
    cy.get("@list1").find("li").invoke("text").as("list1Items");
    cy.get("@list2").find("li").invoke("text").as("list2Items");

    // Step 3: Compare the lists
    cy.get("@list1Items").then((list1Items) => {
      cy.get("@list2Items").then((list2Items) => {
        expect(this.removePart(list1Items)).to.deep.equal(
          this.removePart(list2Items)
        );
      });
    });
  }

  clickPlaceOrder() {
    cy.get(":nth-child(7) > .btn").click();
  }
}

export default CheckoutPage;
