class ProductPage {
    visit() {
        cy.visit('/products')
    }

    selectProduct(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }

    getSearchProduct() {
        
    }

    
}

export default ProductPage