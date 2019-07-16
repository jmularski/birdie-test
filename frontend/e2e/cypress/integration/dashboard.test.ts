/// <reference types="cypress"/>

class DashboardPage {
  public route = "/dashboard";

  public signIn() {
    cy.visit("/");

    cy.get('input[cy-testId="codeField"]').type("df50cac5-293c-490d-a06c-ee26796f850d");
    cy.get('button').click();

    cy.url().should('contain', '/dashboard');
  };
}

const DashboardObject = new DashboardPage();

describe("Dashboard test", () => {
  before(() => {
    DashboardObject.signIn();
  })
  describe("Render", () => {
    it("Shows current mood of patient", () => {
      cy.get('.moodCard').should('be.visible');
    });
    it("Shows graph with past moods", () => {
      cy.get('.moodGraph').should('be.visible');
    });
    it("Shows graph with visit reasons", () => {
      cy.get('.eventsGraph').should('be.visible');
    });
    it("Shows table with visits and timestamps", () => {
      cy.get('.eventsTable').should('be.visible');
    });
  });
  describe("Usage", () => {
    it("transfers you to login when you press logout", () => {
      DashboardObject.signIn();
      cy.get('button').click();
      cy.url().should('eq',`${Cypress.config().baseUrl}/`);
    });
  });
});