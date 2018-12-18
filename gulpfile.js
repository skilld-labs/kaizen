/**
 * @file
 * Scripts to build the theme.
 */

'use strict';

const { parallel, series } = require('gulp');
const { styles } = require('./gulp-tasks/styles');

exports.default = series(
  parallel(styles)
);
