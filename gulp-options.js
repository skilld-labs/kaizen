/**
 * @file
 * Config file for gulp.
 */

'use strict';

const magicImporter = require('node-sass-magic-importer');

let env = process.env.NODE_ENV || 'testing';
let isProduction = (env === 'production');
let options = {};

options.isProduction = isProduction;

options.rootPath = {
  project: __dirname + '/',
  src: __dirname + '/src/',
  dist: __dirname + '/dist/'
};

options.theme = {
  name: 'kaizen',
  gulpAssets: options.rootPath.project + 'gulp-tasks/assets/',
  sass: options.rootPath.src + 'sass/',
  css: options.rootPath.dist + 'css/',
  js: options.rootPath.src + 'js/'
};

options.autoprefixer = {
  browsers: [
    '> 1%'
  ]
};

options.sassFiles = {
  components: options.theme.sass + '**/*.scss',
  ignore: options.theme.sass + '**/_*.scss'
};

options.sass = {
  importer: magicImporter(),
  outputStyle: (isProduction ? 'compresssed' : 'expanded')
};

options.eslint = {
  files: [
    options.rootPath.project + 'gulpfile.js',
    options.theme.js + '**/*.js',
    '!' + options.theme.js + '**/*.min.js',
    options.theme.components + '**/*.js',
    '!' + options.theme.build + '**/*.js'
  ]
};

// If your files are on a network share, you may want to turn on polling for
// Gulp watch. Since polling is less efficient, we disable polling by default.
// Use `options.gulpWatchOptions = {interval: 1000, mode: 'poll'};` as example.
options.gulpWatchOptions = {};

options.browserSync = false;

// Set the URL used to access the Drupal website under development. This will
// allow Browser Sync to serve the website and update CSS changes on the fly.
options.drupalURL = '';

try {
  let overrides = require('./gulp-options.local');
  options = Object.assign(options, overrides);
} catch (ex) {
  console.log('Work with default gulp options');
}

module.exports = options;
