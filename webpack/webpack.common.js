/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: ["@babel/polyfill", path(__dirname, "../src/index.tsx")]
  },
  output: {
    filename: "[name].[contenthash:6].js",
    path: path(__dirname, "../build")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsConfigPathsWebpackPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, "../src/index.html"),
      favicon: path(__dirname, "../src/assets/favicon.png"),
      title: "PM CMS - Headless CMS",
      meta: {
        author: "Patryk Mróz",
        description: "PM CMS is a free headless content management system for your website.",
        "og:title": "PM CMS - Headless CMS",
        "og:description": "PM CMS is a free headless content management system for your website.",
        "og:url": process.env.LANDING_PAGE_URL
      }
    }),
    new DotEnv({
      systemvars: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  }
};
