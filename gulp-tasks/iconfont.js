/**
 * @file
 * Generate SVG sprites.
 */

const {dest, src} = require('gulp');
const options = require('../gulp-options');
const iconfont      = require('gulp-iconfont'),
      iconfontCSS   = require('gulp-iconfont-css');

function ifont() {
  return src(options.theme.sass + '**/*.svg')
    .pipe(iconfontCSS(options.iconfontCSS))
    .pipe(iconfont(options.iconfont))
    .pipe(dest(options.theme.iconfont));
}

exports.iconfont = ifont;
