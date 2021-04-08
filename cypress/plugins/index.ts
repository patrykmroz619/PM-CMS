/// <reference types="cypress" />

import { config } from "dotenv";

config();
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env.api_url = process.env.API_URL;
  config.env.email = process.env.CYPRESS_TEST_ACCOUNT_EMAIL;
  config.env.password = process.env.CYPRESS_TEST_ACCOUNT_PASSWORD;

  return config;
};
