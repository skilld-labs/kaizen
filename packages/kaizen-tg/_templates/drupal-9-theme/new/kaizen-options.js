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
  storybook: `${__dirname}/packages/components/`,
  src: `${__dirname}/src/`,
  dist: `${__dirname}/dist/`,
};

options.theme = {
  name: '<%= h.changeCase.lower(name) %>',
  storybook: `${options.rootPath.storybook}**/**/`,
  drupalCss: `${options.rootPath.src}css/`,
  drupalJs: `${options.rootPath.src}js/`,
};

options.cssFiles = {
  storybookComponents: `${options.theme.storybook}*.css`,
  storybookIgnore: `${options.theme.storybook}_*.css`,
  drupalComponents: `${options.theme.drupalCss}**/*.css`,
  drupalIgnore: `${options.theme.drupalCss}**/_*.css`,
};

options.jsFiles = {
  storybookComponents: `${options.theme.storybook}*.js`,
  storybookIgnore: `${options.theme.storybook}*.stories.js`,
  drupalComponents: `${options.theme.drupalJs}**/*.js`,
};

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
