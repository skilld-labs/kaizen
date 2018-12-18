/**
 * @file
 * Scripts to build the theme.
 */

'use strict';

const { parallel, series } = require('gulp');

// Load tasks.
const { clean, cleanCss, cleanJs } = require('./gulp-tasks/clean');
const { scripts } = require('./gulp-tasks/scripts');
const { styles } = require('./gulp-tasks/styles');

// If we need specific task in cli.
exports.clean = clean;
exports.scripts = series(cleanJs, scripts);
exports.styles = series(cleanCss, styles);

exports.default = series(
  parallel(clean),
  parallel(styles, scripts)
);
