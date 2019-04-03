/**
 * @file
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const options = require('./gulp-options');

const config = {
  context: options.theme.js,
  entry: {
    app: './init.js',
  },
  output: {
    path: options.rootPath.dist,
    filename: 'app.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.modernizrrc\.js$/,
        loader: 'webpack-modernizr-loader',
      },
    ],
  },
  plugins: [],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'cheap-module-eval-source-map';
  config.mode = 'development';
  config.optimization.minimizer = [];
}

// To check bundle size.
if (process.env.NODE_ENV === 'debug') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
