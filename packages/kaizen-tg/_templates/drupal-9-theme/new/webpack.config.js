---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/webpack.config.js
---
/**
 * @file
 */

const glob = require('glob');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const options = require('./<%= h.changeCase.lower(name) %>-options');

const mapJSFilenamesToEntries = (pattern, globOptions) =>
  glob.sync(pattern, globOptions).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.js$/);
    return {
      ...entries,
      [name]: filename,
    };
  }, {});

module.exports = {
  entry: {
    sprite: glob.sync(path.resolve(__dirname, 'images/svg/**/*.svg')),
    styles: glob.sync(options.cssFiles.components, options.cssFiles.ignore),
    ...mapJSFilenamesToEntries(options.jsFiles.components, {}),
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
            loader: '@skilld/kaizen-breakpoints/loader',
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
              url: false,
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
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              symbolId: (filePath) =>
                `svg-${path.basename(filePath.slice(0, -4))}`,
              publicPath: 'svg/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new MiniCssExtractPlugin({
      filename: './dist/css/[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          mangle: {
            reserved: ['Drupal'],
          },
        },
      }),
    ],
  },
};
