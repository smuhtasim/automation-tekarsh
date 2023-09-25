import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";
import ProductPage from "../pages/productPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import CartPage from "../pages/cartPage";
import PaymentPage from "../pages/paymentPage";
import CheckoutPage from "../pages/checkoutPage";

const home = new HomePage();
const login = new LoginPage();
const signup = new SignupPage();
const products = new ProductPage();
const productDetails = new ProductDetailsPage();
const cart = new CartPage();
const payment = new PaymentPage();
const checkOut = new CheckoutPage();

const cardInfo = {
  cName: "Mamodolla",
  cNumber: "69759",
  cCVC: "313",
  cMonth: "12",
  cYear: "2099",
};

const userParams = {
  password: "123456",
  date: "23",
  month: "5",
  year: "1999",
  fname: "calvin",
  lname: "farenheit",
  company: "bichibi",
  address1: "Merpur",
  address2: "Dhaka",
  country: "Australia",
  state: "Dhaka",
  city: "Dhaka",
  zipcode: "1219",
  mobileNumber: "01897543879",
};

const correctCredential = {
  email: "Prijon@gmail.com",
  password: "123456",
};

const wrongCredential = {
  email: 'perajon007@gmail.com',
  password: '234567'
}

const signupInfo = {
  name: 'perejon',
  email: 'Prijon@gmail.com'
}

describe("automation exercise", () => {

  it("1. Verify Home Page", () => {
    home.visit();
    cy.title().should("eq", "Automation Exercise");
  });

  it("2 & 3. Signup User, Logout", () => {
    login.visit();
login.signupUser(signupInfo)
    cy.title().should("eq", "Automation Exercise - Signup");
    signup.createNewUser(userParams)
    cy.get('a[data-qa="continue-button"]').click();
    cy.contains("Logout").click();
  });

  it("4. Incorrect Login and error message", () => {
    login.loginUser(wrongCredential);
    cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p")
      .should("be.visible")
      .and("contain", "Your email or password is incorrect!");
  });

  it("5 & 6. Correct Login, all products and product details", () => {
    login.loginUser(correctCredential)
    products.visit()
    cy.title().should("eq", "Automation Exercise - All Products");
    products.selectProduct("2")
    cy.title().should("eq", "Automation Exercise - Product Details");
  })

  it("7 to rest. Search Product, view product, quantity, cart", () => {
    login.loginUser(correctCredential);
    products.visit();
    products.getSearchProduct().type("polo");
    products.clickSearch();
    cy.contains("Searched Products").should("be.visible");
    cy.get(".product-image-wrapper")
      .eq(0)
      .within(() => {
        cy.get("a").contains("View Product").click();
      });
    cy.url().should("include", "product_details");
    productDetails.addProduct(-2);
    cart.visit();
    //cart.verifyData()
    cart.selectProduct();
    productDetails.addProduct(10);
    cart.visit();
    //cart.verifyData()
    cart.getCheckoutButton().should("not.be.disabled");
    cart.clickCheckoutButton();
    checkOut.verifyAddress();
    checkOut.clickPlaceOrder();
    payment.fillCard(cardInfo);
    payment.clickPay();
    cy.url().should("include", "/payment_done");
    cy.get(".col-sm-9 > .btn-default").click();
    cy.wait(1000);
    const filePath = "cypress/downloads/invoice.txt";
    cy.readFile(filePath).should("exist");
    cy.readFile(filePath).then((fileContent) => {
      const expectedText = "Your total purchase amount is";
      expect(fileContent).to.include(expectedText);
    });

    cy.deleteFile("deleteFile", filePath);
    cy.get('a[href="/logout"]').click();
  });
});
