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
window.svgSpritePath = svgSpritePath;

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
import once from '@drupal/once';
window.once = once;
twigDrupalFilters(Twig);
