---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/postcss.config.js
---
const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/kaizen-breakpoints/postcss-plugin');
const postcssNested = require('postcss-nested');
const postcssDiscardEmpty = require('postcss-discard-empty');
const pxtorem = require('postcss-pxtorem');
const postcssUrl = require('postcss-url');
const stylelint = require('stylelint');
const path = require('path');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
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
      importFrom: './<%= h.changeCase.lower(name) %>.breakpoints.yml',
      themeName: '<%= h.changeCase.lower(name) %>'
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
