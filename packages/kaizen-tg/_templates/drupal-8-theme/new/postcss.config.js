---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/postcss.config.js
---
const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/kaizen-breakpoints/postcss-plugin');
const postcssNested = require('postcss-nested');
const postcssDiscardEmpty = require('postcss-discard-empty');
const stylelint = require('stylelint');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
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
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
