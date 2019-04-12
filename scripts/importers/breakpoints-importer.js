/**
 * @file
 *
 * Custom Node sass importer to parse theme breakpoints yaml.
 */

const path = require('path');
const breakpointsParser = require('../drupal-yml/parseBreakpoints');
const options = require('../../kaizen-options');
const readYaml = require('../drupal-yml/read');

module.exports = (url, prev, done) => {
  const fileName = path.basename(url);
  if (fileName === 'breakpoints.yml') {
    const themeBreakpoints = `${options.theme.name}.breakpoints.yml`;
    const yaml = readYaml(themeBreakpoints);
    const sassMap = breakpointsParser.parseToSass(yaml);
    return { contents: sassMap };
  }
  done();
};
