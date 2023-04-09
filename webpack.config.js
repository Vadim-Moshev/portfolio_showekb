const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
        },
      };

const pages = ["index", "aboutwork"];
const plugins = pages
  .map((page) => {
    return new HtmlWebpackPlugin({
      inject: true,
      template: `./src/${page}.html`,
      filename: `${page}.html`,
      chunks: [page],
    });
  })
  .concat(
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    })
  );

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  ...devServer(develop),
});
