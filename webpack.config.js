// Native
const { resolve } = require('path')

// Modules
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// Constants
const VENDOR_LIBS = ['react', 'react-dom', 'styled-components']

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.tsx',
    vendor: VENDOR_LIBS
  },
  output: {
    chunkFilename: '[id].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    // Removes './public' for new build.
    new CleanWebpackPlugin('public'),
    // Copies 'index.html' to './public' & injects scripts.
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // Tells 'react' to run in production distribution.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
