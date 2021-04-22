describe("content model", () => {
  it("can be created", () => {
    cy.login();
    cy.visit("#/panel");

    cy.intercept("/projects", { fixture: "projects.json" });
    cy.intercept("/projects/1", { fixture: "SingleProject.json" });
    cy.intercept("GET", "/content-models/1", { fixture: "contentModels.json" });
    cy.intercept("POST", "/content-models/1", { fixture: "newContentModel.json", statusCode: 201 });

    cy.contains(/project 1/i).click();

    cy.get('a[title="new model"]').click({ force: true });

    cy.get('input[name="name"]').type("New content model");

    cy.get('input[name="endpoint"]').clear().type("new-content-model");

    cy.get('button[type="submit"]').click();

    cy.contains(/New content model/i);
    cy.contains(/new-content-model/);
  });
});
