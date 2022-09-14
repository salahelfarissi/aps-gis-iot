const path = require('path');
const webpack = require('webpack');
// To avoid modifying html file manually, we use HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // name corresponds to entry name (bundle)
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  // Specifying our loaders
  module: {
    rules: [
      { 
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // For baclwards compatibility
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|xml|json)$/i,
        use: ['url-loader']
      }
    ],
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cesium-GIS-Iot',
      filename: "./index.html",
      template: "./public/index.html",
      excludeChunks: [ 'server' ],
      favicon: './public/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
        { from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' },
        { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
        { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
      ]         
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(''),
    }),
    new Dotenv()
  ],
  amd: {
    toUrlUndefined: true
  },
  resolve: {
    alias: {
      cesium: path.resolve(__dirname, cesiumSource)
    },
    mainFiles: ['index', 'Cesium'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "url": false,
      "os": require.resolve("os-browserify/browser")
    }
  },
  target: 'web',
}