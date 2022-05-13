---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/preview.js
---
// Import global styles.
import '../color/colors.css';
import '../src/css/styles.css';
import config from '../<%= h.changeCase.lower(name) %>.breakpoints.yml';
window.themeBreakpoints = config;

// Import sprite.
import svgSpritePath from '../dist/svg/sprite.svg';
window.<%= h.changeCase.lower(name) %>SvgSpritePath = svgSpritePath;

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
import once from '@drupal/once';
window.once = once;
twigDrupalFilters(Twig);

window.Drupal = { behaviors: {} };

((Drupal, drupalSettings) => {
  // Simplified Drupal.t() function just to be able to use such constructions
  // directly from component's js behaviors.
  Drupal.t = function (str) {
    return str;
  };

  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
})(Drupal, window.drupalSettings);
