class ProductDetailsPage {

    addProduct(quantity) {
        this.getQuantity().clear().type(quantity)
        this.clickAddToCart()
        this.clickContinue()
    }

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

export default ProductDetailsPage