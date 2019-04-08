/**
 * @file
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const prod = require('./webpack.config');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    minimizer: [],
  },
};

// To check bundle size.
if (process.env.NODE_ENV === 'debug') {
  devConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(prod, devConfig);
