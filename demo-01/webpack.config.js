module.exports = {
  entry: './app/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}