const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/postcss-drupal-breakpoints');
const postcssNested = require('postcss-nested');
const stylelint = require('stylelint');
const tailwind = require('tailwindcss');


module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    tailwind(),
    postCssDrupalBreakpoints({
      importFrom: './test.breakpoints.yml',
      themeName: 'test'
    }),
    postcssNested(),
    postcssExtend(),
    autoprefixer({
      cascade: false,
    }),
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});
