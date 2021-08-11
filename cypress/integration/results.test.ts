describe("Results", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should redirect if not completed", () => {
    cy.visit("/calculator/results");
    cy.contains("not finished", {
      matchCase: false,
    });
    cy.contains("view answers", { matchCase: false }).click();

    cy.url().should("include", "/calculator/answers");
  });

});
