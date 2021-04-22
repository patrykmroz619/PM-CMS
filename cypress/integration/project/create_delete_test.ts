describe("Project", () => {
  it("can be created and deleted", () => {
    cy.login();
    cy.visit("#/panel");

    cy.contains(/add project/i, { timeout: 10000 }).click();

    cy.get("input").type("My new project");
    cy.get('button[type="submit"]').click();

    cy.contains(/My new project/).click();
    cy.wait(1000);

    cy.visit("#/panel/settings");

    cy.contains(/delete project/i).click();
    cy.contains(/yes/i).click();

    cy.contains(/your project has been deleted/i);
  });
});
