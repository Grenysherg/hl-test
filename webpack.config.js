const webpack = require("webpack");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    port: 8000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
      publicPath: "../"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    })
  ]
};
