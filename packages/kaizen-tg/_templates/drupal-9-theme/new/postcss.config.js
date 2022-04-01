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
