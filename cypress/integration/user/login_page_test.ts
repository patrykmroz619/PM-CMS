describe("Login page", () => {
  beforeEach(() => {
    cy.visit("#/login");
  });

  it("should allow sign in and then redirects to projects view.", () => {
    cy.get("input[name='email']").type("patrykmroz619@wp.pl");
    cy.get("input[name='password']").type("Rider619");
    cy.get("button").contains("Login").click();
    cy.hash().should("eq", "#/panel/projects");
  });

  it("should display error about credentials.", () => {
    cy.get("input[name='email']").type("patrykmroz619@wp.pl");
    cy.get("input[name='password']").type("Rider619!");
    cy.get("button").contains("Login").click();
    cy.get("form").contains("Password is invalid.");

    cy.get("input[name='email']").type("patrykmroz@wp.pl");
    cy.get("input[name='password']").type("Rider619!");
    cy.get("button").contains("Login").click();
    cy.get("form").contains("User not found.");
  });
});
