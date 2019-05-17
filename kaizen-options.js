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
  sass: `${options.rootPath.src}sass/`,
  css: `${options.rootPath.dist}css/`,
  js: `${options.rootPath.src}js/`,
};

options.sassFiles = {
  components: `${options.theme.sass}**/*.scss`,
  ignore: `${options.theme.sass}**/_*.scss`,
};

options.buildAssets = `${options.rootPath.project}scripts/assets/`;

module.exports = options;
