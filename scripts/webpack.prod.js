const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "static/js/main.[contenthash:6].js", // Thêm mã hash tên file dựa vào content để tránh bị cache bởi CDN hay browser.
    path: path.resolve(__dirname, "../dist"), // Build ra thư mục dist
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],

  optimization: {
    minimizer: [new TerserPlugin()],
  },

  devtool: "source-map",
});
