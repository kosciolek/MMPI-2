import { questionCount } from "../../src/mmpi-2/utils";

describe("Questionnaire", () => {
  beforeEach(() => {
    cy.visit("/questionnaire");
  });

  it("redirects on negative question id", () => {
    cy.visit('/questionnaire/-123')
    cy.url().should('include', '/questionnaire/1')
  });

  it("redirects on invalid question id", () => {
    cy.visit('/questionnaire/2s345dfg')
    cy.url().should('include', '/questionnaire/1')
  });

  it("redirects after completed", () => {
    for (let i = 0; i < questionCount; i += 1) {
      cy.contains("Yes", { log: false }).click({ log: false });
    }

    cy.contains("view results", { matchCase: false }).click();

    cy.url().should('include', '/calculator/results')
  });

});
