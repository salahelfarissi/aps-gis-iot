const path = require('path');

const webpack = require('webpack');

module.exports = {
  // context specifies the directory where webpack should start looking for files to bundle
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: [ 'url-loader' ]
    }]
  }
}