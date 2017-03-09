const webpack = require('webpack');
const common = require('./webpack.base.config');
const path = require('path');
const parentDirectory = __dirname.replace('webpack', '');
const distPath = path.join(parentDirectory, 'dist/');
const merge = require('webpack-merge');

if(common.plugins) {
  common.plugins.push(new webpack.HotModuleReplacementPlugin());
}

console.log({ distPath, parentDirectory });

module.exports = merge({}, common, {
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    //progress: true,
    compress: true,
    stats: 'errors-only',
    host: 'localhost',
    port: '3000',
    headers: { 'Access-Control-Allow-Origin': '*' },
    //open: true
  }
});
