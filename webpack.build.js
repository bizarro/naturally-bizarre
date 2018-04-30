const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const merge = require('webpack-merge')
const config = require('./webpack.common')

module.exports = merge(config, {
  mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          safari10: true
        }
      })
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
})
