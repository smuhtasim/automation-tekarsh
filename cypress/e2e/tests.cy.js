import HomePage from "../pages/homePage";

describe('automation exercise', () => {
      it("1. Verify Home Page", () => {
        HomePage.visit();
        HomePage.isHomePageVisible();
      });
})