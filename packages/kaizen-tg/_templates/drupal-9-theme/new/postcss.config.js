---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/postcss.config.js
---
const autoprefixer = require('autoprefixer');
const postcssExtendRule = require('postcss-extend-rule');
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
    postcssUrl(),
    postCssDrupalBreakpoints({
      importFrom: './<%= h.changeCase.lower(name) %>.breakpoints.yml',
      themeName: '<%= h.changeCase.lower(name) %>',
    }),
    postcssNested(),
    postcssExtendRule(),
    autoprefixer({
      cascade: false,
    }),
    postcssDiscardEmpty(),
    pxtorem({
      minPixelValue: 3,
      propList: [
        '*',
        '!filter',
        '!border',
        '!border-width',
        '!border-top-width',
        '!border-left-width',
        '!border-right-width',
        '!border-bottom-width',
        '!border-top',
        '!border-left',
        '!border-right',
        '!border-bottom',
        '!border-radius',
        '!border-top-left-radius',
        '!border-top-right-radius',
        '!border-bottom-left-radius',
        '!border-bottom-right-radius',
        '!box-shadow',
        '!outline',
        '!outline-offset',
        '!--box-shadow*',
      ],
    }),
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
