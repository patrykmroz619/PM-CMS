/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()]
});
