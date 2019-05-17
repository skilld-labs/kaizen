/**
 * @file
 * Load yaml file content.
 */

const yaml = require('js-yaml');
const fs = require('fs');

module.exports = filePath => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(filePath));
    return doc;
  } catch (e) {
    console.log(e);
  }
};
