const { merge } = require('webpack-merge');
const WebpackCommonConfig = require('./webpack.common.js');
module.exports = merge(WebpackCommonConfig, {
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 8082,
    hot: true,
    hotOnly:true
  }
})