// Native
const { resolve } = require('path')

// Modules
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8000,
    stats: 'errors-only'
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
