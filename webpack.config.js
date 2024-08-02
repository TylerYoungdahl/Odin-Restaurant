const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
