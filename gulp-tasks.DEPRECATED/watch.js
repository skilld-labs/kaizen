/**
 * @file
 * Watch.
 */

const { series, watch } = require('gulp');
const browserSync = require('browser-sync');

const server = browserSync.create();
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const options = require('../gulp-options');

function reload(done) {
  if (options.browserSync) {
    server.reload();
  }
  done();
}

function serve(done) {
  if (options.browserSync) {
    server.init({
      proxy: options.drupalURL,
    });
  }
  done();
}

function watchFiles() {
  watch(
    `${options.theme.sass}**/*.scss`,
    options.gulpWatchOptions,
    series(styles, reload),
  );
  watch(options.theme.js, options.gulpWatchOptions, series(scripts, reload));
}
exports.watch = series(serve, watchFiles);
