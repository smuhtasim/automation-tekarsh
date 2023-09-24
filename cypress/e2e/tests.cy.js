import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";
import ProductPage from "../pages/productPage";

const home = new HomePage();
const login = new LoginPage();
const signup = new SignupPage();
const products = new ProductPage();

const userParams = {
  password: "123456",
  date: "23",
  month: "5",
  year: "1999",
  fname: "mamodolla",
  lname: "riyad",
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
  email: "Srijon@gmail.com",
  password: "123456",
};

describe("automation exercise", () => {
  // before(() => {
  //   cy.session("mySession", () => {
  //     // You can set and retrieve data within this session block
  //     // For example, store and retrieve user authentication data
  //     cy.set("userId", "123"); // Store user ID
  //     cy.set("userName", "john_doe"); // Store user name
  //   });
  // })

  // beforeEach(() => {
  //   cy.session("mySession", () => {
  //     const sessionValue = cy.get("SESSION"); // Retrieve the session value
  //     const csrfToken = cy.get("CSRF-TOKEN"); // Retrieve the CSRF token value
  //   });
  // });
  // it("1. Verify Home Page", () => {
  //   home.visit();
  //   cy.title().should("eq", "Automation Exercise");
  // });

  // it("2 & 3. Signup User, Logout", () => {
  //   login.visit();
  //   login.setSignupName("srijon");
  //   login.setSignupEmail("Srijon@gmail.com");
  //   login.clickSignup();
  //   cy.title().should("eq", "Automation Exercise - Signup");
  //   signup.createNewUser(userParams)
  //   cy.get('a[data-qa="continue-button"]').click();
  //   cy.contains("Logout").click();
  // });

  // it("4. Incorrect Login and error message", () => {
  //   login.visit()
  //   login.setLoginEmail("Srijon@gmail.com");
  //   login.setLoginPassword("6969");
  //   login.clickLogin();
  //   cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p")
  //     .should("be.visible")
  //     .and("contain", "Your email or password is incorrect!");
  // });

  // it("5 & 6. Correct Login, all products and product details", () => {
  //   login.loginUser(correctCredential)
  //   products.visit()
  //   cy.title().should("eq", "Automation Exercise - All Products");
  //   products.selectProduct("2")
  //   cy.title().should("eq", "Automation Exercise - Product Details");
  // })

  it("7 8 9. Search Product, view product, quantity, cart", () => {
    login.loginUser(correctCredential);
    products.visit();
    products.getSearchProduct().type("polo");
    products.clickSearch();
    cy.contains("Searched Products").should("be.visible");
    cy.get(".product-image-wrapper")
      .eq(0)
      .within(() => {
        // Use .find() to locate the anchor tag within the parent element
        cy.get("a").contains("View Product").click();
      });
    cy.url().should("include", "product_details");
    
  });
});

// body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a
// body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a
// body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.choose > ul > li > a

// body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(4) > div > div.choose > ul > li > a
