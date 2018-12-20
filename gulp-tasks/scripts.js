/**
 * @file
 * Javascript.
 */

const {dest, src} = require('gulp');
const options = require('../gulp-options');
const webpack = require('webpack-stream');


function scripts() {
  return src(options.theme.js + '*.js')
    .pipe(webpack(require('../webpack.config')))
    .pipe(dest(options.rootPath.dist));
}

exports.scripts = scripts;
