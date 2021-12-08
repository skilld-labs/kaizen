const fs = require('fs');
const postcss = require('postcss')
const yaml = require('js-yaml')
const { parseToCss }  = require('./parse-breakpoints');

module.exports = postcss.plugin('postcss-drupal-breakpoints', function (opts) {
  opts = opts || {}

  const importFrom = opts.importFrom
  const themeName = opts.themeName

  try {
    const doc = yaml.safeLoad(fs.readFileSync(importFrom))
    const breakpoints = parseToCss(doc, themeName);

    return function (root) {

      root.walkAtRules(atRule => {
        switch (atRule.name) {
          case 'drupal-breakpoint':
          case 'db':
            const media = breakpoints[themeName][atRule.params]
            atRule.name = 'media'
            atRule.params = media
            break;
        }
      })
    }

  } catch (e) {
    console.log(e);
  }
})
