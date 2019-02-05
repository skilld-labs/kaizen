/**
 * @file
 * Lint.
 */

// TODO: Check how to extend core eslint

const options = require('../gulp-options');
const eslint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');
const {src} = require('gulp');

function lintJs() {
  return src(options.eslint.files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
}

function lintCss() {
  return src(options.theme.sass + '**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

exports.lintJs = lintJs;
exports.lintCss = lintCss;
