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
const stylelint = require('stylelint');
<% if (type === 'primary') {-%>
const tailwind = require('tailwindcss');
<% } -%>


module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
<% if (type === 'primary') {-%>
    tailwind(),
<% } -%>
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
