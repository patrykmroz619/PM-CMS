/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  target: "web",
  entry: ["@babel/polyfill", path.join(__dirname, "src", "index.tsx")],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsConfigPathsWebpackPlugin()]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
    stats: "minimal"
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    }),
    new DotEnv()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
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
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false
            }
          }
        ]
      }
    ]
  }
};
