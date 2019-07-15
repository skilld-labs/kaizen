const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('@skilld/postcss-drupal-breakpoints');
const postcssNested = require('postcss-nested');
const stylelint = require('stylelint');

module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    postCssDrupalBreakpoints({
      importFrom: './kaizen.breakpoints.yml',
      themeName: 'kaizen'
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
