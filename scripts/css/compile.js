const chalk = require('chalk');
const sass = require('node-sass');
const path = require('path');
const options = require('../../gulp-options');
const log = require('./log');

module.exports = (filePath, callback) => {
  const fileName = path.basename(filePath, '.scss');

  sass.render(
    {
      file: filePath,
      includePaths: [`${options.rootPath.project}node_modules`],
      outputStyle: 'expanded',
      outFile: `${options.theme.css}${fileName}.css`,
      sourceComments: process.env.NODE_ENV === 'development',
      sourceMap: process.env.NODE_ENV === 'development',
    },
    (err, result) => {
      if (err) {
        log(chalk.red(err));
        process.exitCode = 1;
      } else {
        callback(result.css, fileName, result.map);
      }
    },
  );
};