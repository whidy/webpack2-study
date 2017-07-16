var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

var px2rem = require('postcss-px2rem');

var config = {
  entry: {
    flexible: './src/script/flexible.js',
    index: './src/script/index.js'
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "px2rem-loader",
            options: {
              remUnit: 75
            }
          }, {
            loader: 'postcss-loader'
          }, {
            loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.[hash].css"),
    new HtmlWebpackPlugin({
      "files": {
        "css": ["main.css"],
        "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
        "chunks": {
          "head": {
            "entry": "assets/head_bundle.js",
            "css": ["main.css"]
          },
          "main": {
            "entry": "assets/main_bundle.js",
            "css": []
          },
        }
      },
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}

module.exports = config;