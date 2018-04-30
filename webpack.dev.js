const merge = require('webpack-merge')
const config = require('./webpack.common')

module.exports = Object.assign(config, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  }
})
