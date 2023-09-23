import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";

const home = new HomePage();
const login = new LoginPage();
const signup = new SignupPage();

describe("automation exercise", () => {
  it("1. Verify Home Page", () => {
    home.visit();
    cy.title().should("eq", "Automation Exercise");
  });

  it("2 & 3. Signup User, Logout", () => {
    login.visit();
    login.setSignupName("srijon");
    login.setSignupEmail("Srijon@gmail.com");
    login.clickSignup();
    cy.title().should("eq", "Automation Exercise - Signup");
    signup.setTitle();
    signup.setPassword("123456");
    signup.setBirthDate("12");
    signup.setBirthMonth("January");
    signup.setBirthYear("1999");
    signup.checkNews();
    signup.checkOffers();
    signup.setFirstName("srijon");
    signup.setLastName("Muhtasim");
    signup.setCompany("streams");
    signup.setAddress("Lalmatia", "Dhaka");
    signup.setCountry("Canada");
    signup.setState("Dhaka");
    signup.setCity("Dhaka");
    signup.setZipcode("1207");
    signup.setMobileNumber("01678560927");
    signup.clickCreateAccount();
    cy.get('a[data-qa="continue-button"]').click();
    cy.contains("Logout").click();
  });

  it("4. Incorrect Login and error message", () => {
    login.visit()
    login.setLoginEmail("Srijon@gmail.com");
    login.setLoginPassword("6969");
    login.clickLogin();
    cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p")
      .should("be.visible")
      .and("contain", "Your email or password is incorrect!");
  });
});
