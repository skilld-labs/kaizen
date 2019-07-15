/**
 * @file
 */

const glob = require('glob');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const options = require('./kaizen-options');

const mapFilenamesToEntries = (pattern, globOptions) =>
  glob.sync(pattern, globOptions).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.css$/);
    return {
      ...entries,
      [name]: filename,
    };
  }, {});

module.exports = {
  context: options.theme.js,
  entry: {
    app: './init.js',
    ...mapFilenamesToEntries(options.cssFiles.components, {
      ignore: options.cssFiles.ignore,
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
            loader: '@skilld/webpack-drupal-breakpoints-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'extract-loader',
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
        test: /\.svg$/,
        use: {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            symbolId: filePath => `svg-${path.basename(filePath.slice(0, -4))}`,
            publicPath: 'svg/',
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
    new SpriteLoaderPlugin({
      plainSprite: true,
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
