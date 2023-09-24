class CheckoutPage {
    visit() {
        cy.visit('/checkout')
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
            // Use Cypress assertions to compare the two lists
            expect(list1Items).to.deep.equal(list2Items);
          });
        });
    }

    clickPlaceOrder() {
        cy.get(".btn btn-default check_out").click();
    }
}