/**
 * @file
 * Clean functions.
 */

const del = require('del');
const options = require('../gulp-options');

function cleanCss() {
  return del([
    options.theme.css + '*',
  ], {force: true});
}

function cleanDist() {
  return del([
    options.rootPath.dist + '/**/*'
  ], {force: true});
}

function cleanJs() {
  return del([
    options.theme.js + '*',
  ], {force: true});
}

exports.cleanCss = cleanCss;
exports.cleanDist = cleanDist;
exports.cleanJs = cleanJs;
