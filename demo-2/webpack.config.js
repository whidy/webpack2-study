var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
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