/**
 * @file
 * Config file for scripts.
 */

const options = {};

options.rootPath = {
  project: `${__dirname}/`,
  src: `${__dirname}/src/`,
  dist: `${__dirname}/dist/`,
};

options.theme = {
  name: 'kaizen',
  css: `${options.rootPath.src}css/`,
  js: `${options.rootPath.src}js/`,
};

options.cssFiles = {
  components: `${options.theme.css}**/*.css`,
  ignore: `${options.theme.css}**/_*.css`,
};

options.buildAssets = `${options.rootPath.project}scripts/assets/`;

module.exports = options;
