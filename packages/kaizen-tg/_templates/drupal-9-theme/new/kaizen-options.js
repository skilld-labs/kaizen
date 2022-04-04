---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>-options.js
---
/**
 * @file
 * Config file for scripts.
 */

let options = {};

options.rootPath = {
  project: `${__dirname}/`,
  src: `${__dirname}/src/`,
  dist: `${__dirname}/dist/`,
};

options.theme = {
  name: '<%= h.changeCase.lower(name) %>',
  css: `${options.rootPath.src}css/`,
  js: `${options.rootPath.src}js/`,
};

options.cssFiles = {
  components: `${options.theme.css}**/*.css`,
  ignore: `${options.theme.css}**/_*.css`,
};

options.buildAssets = `${options.rootPath.project}scripts/assets/`;

options.postCssConfigDirectory = `${options.rootPath.project}`;

// Check if this is primary theme with own config overrides.
try {
  // eslint-disable-next-line
  const overrides = require('./<%= h.changeCase.lower(name) %>-options-override');
  options = Object.assign(options, overrides);
} catch (ex) {
  // eslint-disable-next-line no-console
  console.log('Work with default basic options');
}

module.exports = options;
