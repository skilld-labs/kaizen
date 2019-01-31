/**
 * @file
 * Generate SVG sprites.
 */

const {dest, src} = require('gulp');
const options = require('../gulp-options');
const sizeOf = require('image-size');
const glob = require('glob');
const consolidate = require('gulp-consolidate');
const iconfont = require('gulp-iconfont');

function iFont() {
  const sizes = iSize();
  return src(options.theme.sass + '**/*.svg')
    .pipe(iconfont(options.iconfont))
    .on('glyphs', (glyphs) => {
      for (const i of glyphs.keys()) {
        glyphs[i]['fontSize'] = sizes[i];
      }
      let iconfontCSSOptions = options.iconfontCSS;
      iconfontCSSOptions['glyphs'] = glyphs.map(mapGlyphs);
      return src(options.rootPath.src + 'svg/_svg-font-template.scss')
        .pipe(consolidate('lodash', iconfontCSSOptions))
        .pipe(dest(options.theme.iconfont))
    })
    .pipe(dest(options.theme.iconfont));
}

function iSize() {
  const imagePathsArray = glob.sync(options.theme.sass + '**/*.svg');
  let sizes = {};
  for (const i of imagePathsArray.keys()) {
    const dimensions = sizeOf(imagePathsArray[i]);
    sizes[i] = dimensions.width < dimensions.height ? dimensions.width : dimensions.height;
  }

  return sizes;
}

function mapGlyphs(glyph) {
  return { fileName: glyph.name, codePoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase(), fontSize: glyph.fontSize + 'px' }
}

exports.iconfont = iFont;
