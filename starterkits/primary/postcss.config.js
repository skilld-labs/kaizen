const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/postcss-drupal-breakpoints');
const postcssNested = require('postcss-nested');
const postcssDiscardEmpty = require('postcss-discard-empty');
const stylelint = require('stylelint');
const tailwind = require('tailwindcss');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    tailwind(),
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
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
