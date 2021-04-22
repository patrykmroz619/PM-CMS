/// <reference path="../../support/index.d.ts" />

describe("Register page", () => {
  it("should allow to create new account and delete it.", () => {
    cy.visit("#/register");

    cy.get('input[name="email"]', { timeout: 10000 }).type("example@mail.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get('input[name="passwordRepeated"]').type("Password123");

    cy.get("button").contains("Next").click();

    cy.get('input[name="name"]').type("Name");
    cy.get('input[name="surname"]').type("Surname");
    cy.get('input[name="company"]').type("Company");

    cy.get('button[type="submit"]').click();
    cy.hash().should("eq", "#/panel/projects");

    cy.get('a[title="Profile"]').click();

    cy.get('button[data-testid="delete-user"]').click();

    cy.get('button[data-testid="yes"]').click();

    cy.hash().should("eq", "#/login");
  });
});
