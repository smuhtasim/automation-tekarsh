class ProductDetailsPage {



    getQuantity() {
        return cy.get("#quantity");
    }

    clickAddToCart() {
        cy.get("button").contains("Add to cart").click();
    }

    clickContinue() {
        cy.get(".modal-content").within(() => {
          cy.get("button").contains("Continue Shopping").click(); 
        });
    }
}