const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/kaizen-breakpoints/postcss-plugin');
const postcssNested = require('postcss-nested');
const postcssDiscardEmpty = require('postcss-discard-empty');
const pxtorem = require('postcss-pxtorem');
const postcssUrl = require('postcss-url');
const stylelint = require('stylelint');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    postcssUrl(
      {
        url: 'inline',
        basePath: [
          '../../',
          '../../../',
          '../../../../',
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
        '!border',
        '!border-width',
        '!border-top-width',
        '!border-left-width',
        '!border-right-width',
        '!border-bottom-width',
        '!border-radius',
        '!border-top-left-radius',
        '!border-top-right-radius',
        '!border-bottom-left-radius',
        '!border-bottom-right-radius',
        '!box-shadow',
        '!outline',
        '!outline-offset',
      ]
    }),
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
