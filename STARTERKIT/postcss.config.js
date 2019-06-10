const autoprefixer = require('autoprefixer');
const postcssExtend = require('postcss-extend');
const postcssImport = require('postcss-import');
const postCssDrupalBreakpoints = require('postcss-drupal-breakpoints');
const postcssNested = require('postcss-nested');
const stylelint = require('stylelint');


module.exports = () => ({
  map: false,
  plugins: [
    postcssImport(),
    autoprefixer({
      cascade: false,
    }),
    postcssExtend(),
    postCssDrupalBreakpoints({
      importFrom: './kaizen.breakpoints.yml',
      themeName: 'kaizen'
    }),
    postcssNested(),
    stylelint({
      configFile: './.stylelintrc',
      fix: true
    }),
  ],
});