describe("Project's settings", () => {
  beforeEach(() => {
    cy.login();
    cy.intercept("/projects", { fixture: "projects.json" });
    cy.intercept("/projects/1", { fixture: "SingleProject.json" });
    cy.intercept("/content-models/1", { fixture: "contentModels.json" });

    cy.intercept("PATCH", "/projects/1", (req) => {
      req.on("response", (res) => {
        res.statusCode = 201;
        res.body = {
          id: "1",
          userId: "1",
          name: "New name",
          createdAt: 1223,
          published: true
        };
      });
    });

    cy.visit("#/panel");
  });

  it("allow change the project's name", () => {
    cy.contains(/project 1/i).click();
    cy.get("a[title=Settings]").click();

    cy.contains(/click to update/i).click();

    cy.get('input[name="project name"]').clear().type("New name");

    cy.contains(/confirm/i).click();

    cy.contains(/Project name has been updated/i);
  });

  it("allow change the project's publishing", () => {
    cy.contains(/project 1/i).click();
    cy.get("a[title=Settings]").click();

    cy.get('input[data-testid="toggler"]').click({ force: true });

    cy.contains(/Your project is published/i);
  });
});
