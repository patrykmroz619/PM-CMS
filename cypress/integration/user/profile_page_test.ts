describe("Profile page", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("#/panel/profile");
  });

  it("allows change the user's password", () => {
    cy.contains(/change password/i).click();

    cy.get('input[id="currentPassword"]').type(Cypress.env("password")),
      cy.get('input[id="newPassword"]').type(Cypress.env("password")),
      cy.get('input[id="passwordRepeated"]').type(Cypress.env("password"));

    cy.get('button[type="submit"]')
      .contains(/change password/i)
      .click();

    cy.contains(/password has been changed/);
  });

  it("allows update user's data", () => {
    cy.contains(/update data/i).click();

    cy.get('input[id="name"]').clear().type("John"),
      cy.get('input[id="surname"]').clear().type("Doe"),
      cy.get('input[id="company"]').clear().type("Company");

    cy.get('button[type="submit"]')
      .contains(/update data/i)
      .click();

    cy.contains(/your personal data/i);
  });
});
