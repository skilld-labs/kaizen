/**
 * @file
 * Scripts to build the theme.
 */

'use strict';

const { parallel, series } = require('gulp');

// Load tasks.
const { cleanCss, cleanDist, cleanJs } = require('./gulp-tasks/clean');
const { styles } = require('./gulp-tasks/styles');

// If we need specific task in cli.
exports.clean = cleanDist;
exports.styles = series(cleanCss, styles);

exports.default = series(
  parallel(cleanDist),
  parallel(styles)
);
