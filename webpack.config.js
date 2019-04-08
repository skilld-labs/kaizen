/**
 * @file
 */

const TerserPlugin = require('terser-webpack-plugin');
const options = require('./kaizen-options');

module.exports = {
  context: options.theme.js,
  entry: {
    app: './init.js',
  },
  output: {
    path: `${options.rootPath.dist}js/`,
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
