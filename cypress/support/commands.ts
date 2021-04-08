Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("api_url") + "login",
    body: {
      email: Cypress.env("email"),
      password: Cypress.env("password")
    }
  }).then((response) => {
    window.localStorage.setItem("ACCESS_TOKEN", response.body.tokens.accessToken);
    window.localStorage.setItem("REFRESH_TOKEN", response.body.tokens.refreshToken);
  });
});
