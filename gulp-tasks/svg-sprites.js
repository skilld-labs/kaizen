/**
 * @file
 * Generate SVG sprites.
 */

const {dest, src} = require('gulp');
const options = require('../gulp-options');
const svgSprite = require('gulp-svg-sprite');

function svg() {
  return src(options.theme.sass + '/storage/svg/*.svg')
    .pipe(svgSprite(options.svgConfig))
    .pipe(dest(options.theme.svg));
}

exports.svg = svg;
