class ProductPage {
    visit() {
        cy.visit('/products')
    }

    selectProduct(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }

    getSearchProduct() {
        return cy.get("#search_product");
    }

    clickSearch() {
        cy.get("#submit_search").click();
    }
}

export default ProductPage