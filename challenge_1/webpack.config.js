//webpack.config.js
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './client/src/index.jsx'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  }
}