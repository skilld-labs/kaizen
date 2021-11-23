const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/kaizen-breakpoints/postcss-plugin');
const postcssNested = require('postcss-nested');
const postcssDiscardEmpty = require('postcss-discard-empty');
const postcssUrl = require('postcss-url');
const postcssCustomMedia = require('postcss-custom-media');
const pxtorem = require('postcss-pxtorem');
const stylelint = require('stylelint');
const path = require('path');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    postcssCustomMedia(),
    postcssUrl(
      {
        url: 'inline',
        basePath: [
          path.resolve('images'),
          path.resolve('fonts'),
        ],
      },
    ),
    postCssDrupalBreakpoints({
      importFrom: './kaizen.breakpoints.yml',
      themeName: 'kaizen'
    }),
    postcssNested(),
    postcssExtend(),
    autoprefixer({
      cascade: false,
    }),
    postcssDiscardEmpty(),
    pxtorem({
      propList: [
        '*',
      ]
    }),
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
