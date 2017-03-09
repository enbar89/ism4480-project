const webpack = require('webpack');
const common = require('./webpack/webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge({}, common, {
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
});
