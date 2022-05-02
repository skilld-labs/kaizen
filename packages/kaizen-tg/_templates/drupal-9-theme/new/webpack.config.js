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
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const options = require('./<%= h.changeCase.lower(name) %>-options');

const mapJSFilenamesToEntries = (pattern, globOptions) =>
  glob.sync(pattern, globOptions).reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.js$/);
    const entryName = filename.includes(options.rootPath.storybook)
      ? `storybook-js/components/${name}/${name}`
      : `drupal-js/${name}`;
    return {
      ...entries,
      [entryName]: filename,
    };
  }, {});

const entries = {
  'entries/sprite': glob.sync(path.resolve(__dirname, 'images/svg/**/*.svg')),
  'entries/drupalStyles': glob.sync(
    options.cssFiles.drupalComponents,
    options.cssFiles.drupalIgnore,
  ),
  ...mapJSFilenamesToEntries(options.jsFiles.drupalComponents, {}),
  ...mapJSFilenamesToEntries(options.jsFiles.storybookComponents, {
    ignore: options.jsFiles.storybookIgnore,
  }),
};

const storybookStyles = glob.sync(options.cssFiles.storybookComponents, {
  ignore: options.cssFiles.storybookIgnore,
});

if (storybookStyles.length) {
  entries['entries/storybookStyles'] = storybookStyles;
}

module.exports = {
  entry: entries,
  output: {
    path: options.rootPath.dist,
    filename: '[name].js',
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
              name(resourcePath) {
                return resourcePath.includes(options.rootPath.storybook)
                  ? 'storybook-css/components/[name]/[name].css'
                  : 'drupal-css/[name].css';
              },
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
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['entries/'],
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
