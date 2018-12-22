/**
 * @file
 * Styles.
 */
'use strict';

// TODO:
// 1) Check https://gulpjs.com/docs/en/api/lastrun for gulp-cached.
// 2) Check if we need https://github.com/jackfranklin/gulp-load-plugins still.

const options = require('../gulp-options');

const {dest, lastRun, src} = require('gulp');
const autoprefixer  = require('gulp-autoprefixer');
const gulpif        = require('gulp-if');
const rename        = require('gulp-rename');
const sass          = require('gulp-sass');
const size          = require('gulp-size');
const sourcemaps    = require('gulp-sourcemaps');

function styles() {
  return src(options.sassFiles, {since: lastRun(styles)})
    .pipe(gulpif(!options.isProduction, sourcemaps.init()))
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe(autoprefixer(options.autoprefixer))
    .pipe(rename({dirname: ''}))
    .pipe(gulpif(!options.isProduction, size({showFiles: true})))
    .pipe(gulpif(!options.isProduction, sourcemaps.write('./')))
    .pipe(dest(options.theme.css));
}

exports.styles = styles;
