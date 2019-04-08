const chalk = require('chalk');
const fs = require('fs');
const log = require('./log');
const compile = require('./compile');
const options = require('../../kaizen-options');

module.exports = filePath => {
  log(`'${filePath}' is being processed.`);
  // Transform the file.
  compile(filePath, function write(code, fileName, map) {
    // Write the result to the filesystem.
    fs.writeFile(`${options.theme.css}${fileName}.css`, code, err => {
      if (err) {
        log(chalk.red(err));
        process.exitCode = 1;
      } else {
        log(`'${filePath}' is finished.`);
      }
    });

    if (process.env.NODE_ENV === 'development' && map) {
      fs.writeFile(`${options.theme.css}${fileName}.css.map`, map, () => {
        log(`'${filePath}' map is finished.`);
      });
    }
  });
};
