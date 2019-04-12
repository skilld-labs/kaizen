/**
 * @file
 */

const glob = require('glob');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const breakpointsImporter = require('./scripts/importers/breakpoints-importer');
const options = require('./kaizen-options');

const mapFilenamesToEntries = (pattern, globOptions) =>
  glob.sync(pattern, globOptions).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.scss$/);
    return {
      ...entries,
      [name]: filename,
    };
  }, {});

module.exports = {
  context: options.theme.js,
  entry: {
    app: './init.js',
    ...mapFilenamesToEntries(options.sassFiles.components, {
      ignore: options.sassFiles.ignore,
    }),
  },
  output: {
    path: options.rootPath.dist,
    filename: 'js/[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.yml$/,
        use: [
          {
            loader: 'breakpoints-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [`${options.rootPath.project}node_modules`],
              outputStyle: 'expanded',
              sourceMap: process.env.NODE_ENV === 'development',
              sourceComments: process.env.NODE_ENV === 'development',
              importer: breakpointsImporter,
            },
          },
        ],
      },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'scripts/loaders/')],
  },
};
