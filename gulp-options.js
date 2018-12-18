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
  root: options.rootPath.theme,
  sass: options.rootPath.src + 'sass/',
  css: options.rootPath.dist + 'css/',
  js: options.rootPath.src + 'js/'
};

options.autoprefixer = {
  browsers: [
    '> 1%'
  ]
};

options.sassFiles = [
  options.theme.sass + '**/*.scss',
  // Do not open Sass partials as they will be included as needed.
  '!' + options.theme.sass + '**/_*.scss'
];

options.sass = {
  importer: magicImporter(),
  outputStyle: (isProduction ? 'compresssed' : 'expanded')
};

module.exports = options;
