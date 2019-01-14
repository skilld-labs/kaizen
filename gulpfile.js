/**
 * @file
 * Scripts to build the theme.
 */

'use strict';

const {parallel, series} = require('gulp');

// Load tasks.
const {breakpoints} = require('./gulp-tasks/breakpoints');
const {clean, cleanCss, cleanJs} = require('./gulp-tasks/clean');
const {lintCss, lintJs} = require('./gulp-tasks/lint');
const {scripts} = require('./gulp-tasks/scripts');
const {styles} = require('./gulp-tasks/styles');
const {watch} = require('./gulp-tasks/watch');
const {createComponent} = require('./gulp-tasks/create-component');
const {svg} = require('./gulp-tasks/svg-sprites');
const {iconfont} = require('./gulp-tasks/iconfont');

// If we need specific task in cli.
exports.bp = breakpoints;
exports.clean = clean;
exports.lint = parallel(lintCss, lintJs);
exports.scripts = series(cleanJs, scripts);
exports.styles = series(cleanCss, styles);
exports.watch = watch;
exports.cc = createComponent;
exports.icons = series(svg, iconfont);

exports.default = series(
  parallel(lintCss, lintJs),
  parallel(clean),
  breakpoints,
  series(svg, iconfont),
  parallel(styles, scripts)
);
