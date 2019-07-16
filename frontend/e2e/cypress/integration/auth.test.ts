/// <reference types="cypress"/>

class AuthPage {
  public route = "/";
  
  public visit() {
    cy.visit(this.route)
  }
}

const AuthObject = new AuthPage();

describe("Auth page", () => {
  before(() => {
    AuthObject.visit();
  })
  describe("Render", () => {
    it("has login title", () => {
      cy.contains("Login to the service");
    });
    it("has explanatory subtitle", () => {
      cy.contains("Use code we gave you to login to the service");
    });
    it("has code input field", () => {
      cy.contains("Code");
    });
    it("has login button", () => {
      cy.contains("Sign in");
    });
  })
  describe("Usage", () => {
    it("redirects to dashboard when good code entered", () => {
      AuthObject.visit();

      cy.get('input[cy-testId="codeField"]').type("df50cac5-293c-490d-a06c-ee26796f850d");
      cy.get('button').click();

      cy.url().should('contain', '/dashboard');
    });
    it("shows error when bad code entered", () => {
      AuthObject.visit();

      cy.get('input[cy-testId="codeField"]').type("test");
      cy.get("button").click();

      cy.contains("User with given id was not found!");
    });
    it("shows error when no code entered", () => {
      AuthObject.visit();

      cy.get("button").click();

      cy.contains("No id has been sent!");
    });
    it("redirects to itself when unauthorized enters site", () => {
      cy.visit("/dashboard");

      cy.url().should('eq',`${Cypress.config().baseUrl}${AuthObject.route}`);
    });
  })
})
