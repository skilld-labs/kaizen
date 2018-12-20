/**
 * @file
 */

const options = require('./gulp-options');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

let config = {
  context: options.theme.js,
  entry: {
    app: './init.js'
  },
  output: {
    path: options.rootPath.dist,
    filename: 'app.js'
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', {
                legacy: true
              }],
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-throw-expressions'
            ]
          }
        }
      },
      {
        test: /\.modernizrrc\.js$/,
        loader: 'webpack-modernizr-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    minimizer: []
  }
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';
  config.optimization.minimizer.push(
    new UglifyJsPlugin()
  );
}

module.exports = config;
