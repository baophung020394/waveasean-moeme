const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    allowedHosts: ["auto"],
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  devtool: "inline-source-map",
});
