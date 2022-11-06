const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    https: false,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../dist')
    },
    devMiddleware: {
      index: true,
      publicPath: '/',
      writeToDisk: true
    },
    client: {
      logging: 'log'
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(__dirname, '../dist')
      ]
    })
  ]
});
