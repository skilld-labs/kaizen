/**
 * @file
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const prod = require('./webpack.config');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimizer: [],
  },
  plugins: []
};

// To check bundle size.
if (process.env.NODE_ENV === 'debug') {
  devConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(prod, devConfig);
