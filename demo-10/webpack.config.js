var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

var px2rem = require('postcss-px2rem');

var config = {
  entry: {
    bodyCommon: './src/script/common.js',
    headFlexible: './src/script/flexible.js',
    bodyIndex: './src/script/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
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
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('indexHead.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false,
      chunks: ['bodyCommon', 'headFlexible', 'bodyIndex'],
      heads: ['headFlexible'],
      bodys: ['bodyCommon', 'bodyIndex'],
      style: ['indexHead.css']
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