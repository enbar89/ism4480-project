const path = require('path');
const parentDirectory = __dirname.replace('webpack', '');
const srcPath = path.join(parentDirectory, 'src/');
const distPath = path.join(parentDirectory, 'dist/');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

console.log({ parentDirectory, srcPath, distPath });

const common = {
  target: 'web',
  entry: {
    'app/main': path.join(srcPath, 'index.js')
  },
  output: {
    path: distPath,
    publicPath: '/',
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'}) },
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], include: srcPath, exclude: '/node_modules/' }
    ]
  },
  resolve: {
    //
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].bundle.css')
  ],
  stats: {
    colors: true
  }
};

module.exports = merge ({}, common);
