/**
 * @file
 *
 * Provides the build:css command to compile sass files to css.
 *
 * Run build:css with --file to only parse a specific file.
 * @example <caption>Only process src/sass/styles.scss</caption
 * yarn run build:css-dev --file ./src/sass/styles.scss
 */

const glob = require('glob');
const argv = require('minimist')(process.argv.slice(2));
const options = require('../../gulp-options');
const changeOrAdded = require('./changeOrAdded');

const fileMatch = options.sassFiles.components;
const globOptions = {
  ignore: options.sassFiles.ignore,
};

const processFiles = (error, filePaths) => {
  if (error) {
    process.exitCode = 1;
  }
  // Process all the found files.
  const callback = changeOrAdded;
  filePaths.forEach(callback);
};

if (argv.file) {
  processFiles(null, [].concat(argv.file));
} else {
  glob(fileMatch, globOptions, processFiles);
}
process.exitCode = 0;
