var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var px2rem = require('postcss-px2rem');

var config = {
  entry: './src/index.js',
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
              remUnit: 10 //设计稿宽度750px HTML基数10px 2倍大小
            }
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
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}

module.exports = config;