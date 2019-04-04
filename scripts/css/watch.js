/**
 * @file
 *
 * Watch changes to *.sass files and compile them to css during development.
 */

const fs = require('fs');
const chokidar = require('chokidar');
const options = require('../../gulp-options');

const changeOrAdded = require('./changeOrAdded');
const log = require('./log');

const fileMatch = options.sassFiles.components;
const watcher = chokidar.watch(fileMatch, {
  ignoreInitial: true,
  ignored: options.sassFiles.ignore,
});

const unlinkHandler = err => {
  if (err) {
    log(err);
  }
};

// Watch for filesystem changes.
watcher
  .on('add', changeOrAdded)
  .on('change', changeOrAdded)
  .on('unlink', filePath => {
    const fileName = path.basename(filePath, '.scss');
    fs.stat(`${fileName}.css`, () => {
      fs.unlink(`${fileName}.css`, unlinkHandler);
    });
  })
  .on('ready', () => log(`Watching '${fileMatch}' for changes.`));
