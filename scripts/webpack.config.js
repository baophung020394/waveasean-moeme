const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  mode: "development",

  // output: {
  //   path: __dirname + "../public",
  //   filename: "bundle.js",
  // },

  resolve: {
    alias: {
      environment: path.resolve(__dirname, "../src/environments/"),
      components: path.resolve(__dirname, "../src/components/"),
      features: path.resolve(__dirname, "../src/features/"),
      stores: path.resolve(__dirname, "../src/stores/"),
      models: path.resolve(__dirname, "../src/models/"),
      layouts: path.resolve(__dirname, "../src/layouts/"),
      actions: path.resolve(__dirname, "../src/actions/"),
      api: path.resolve(__dirname, "../src/api/"),
      reducers: path.resolve(__dirname, "../src/reducers/"),
      store: path.resolve(__dirname, "../src/store/"),
      utils: path.resolve(__dirname, "../src/utils/"),
      constants: path.resolve(__dirname, "../src/constants/"),
      services: path.resolve(__dirname, "../src/services/"),
      hooks: path.resolve(__dirname, "../src/hooks/"),
      assets: path.resolve(__dirname, "../src/assets/"),
      mocks: path.resolve(__dirname, "../src/mocks/"),
      db: path.resolve(__dirname, "../src/db/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "../"),
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
      filename: "./index.html",
    }),
    new BaseHrefWebpackPlugin({ baseHref: "/" }),
  ],

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
