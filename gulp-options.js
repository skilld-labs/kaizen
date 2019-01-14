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
  root: options.rootPath.project,
  svg: options.rootPath.dist + 'svg/',
  iconfont: options.rootPath.dist + 'fonts/',
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

options.sassFiles = [
  options.theme.sass + '**/*.scss',
  // Do not open Sass partials as they will be included as needed.
  '!' + options.theme.sass + '**/_*.scss'
];

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

// Svg sprite options.
options.svgConfig = {
  shape: {
    dimension: {
      maxWidth: 500,
      maxHeight: 500,
      transform: ['svgo']
    },
    id: {
      separator: ''
    }
  },
  mode: {
    view: {
      dest: './',
      sprite: '../svg',
      bust: true,
      prefix: '@mixin svg-sprite--%s',
      layout: 'diagonal',
      mixin: true,
      render: {
        scss: {
          dest: 'svg-sprite-mixins.scss',
          template: options.rootPath.src + '/svg/_svg-sprite-template.scss'
        }
      },
      example: true
    }
  }
};

// IconfontCSS options.
options.iconfontCSS = {
  fontName: 'skilld-iconic-font',
  path: options.theme.root + 'src/svg/_svg-font-template.scss',
  targetPath: '_svg-font-mixins.scss',
  fontPath: '../fonts/'
};

// Iconfont options.
options.iconfont = {
  fontName: 'skilld-iconic-font',
  formats: ['svg', 'woff', 'woff2'],
  normalize: true,
  fontHeight: 1001
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
