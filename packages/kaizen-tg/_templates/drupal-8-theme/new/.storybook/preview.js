---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/preview.js
---
// Import global styles.
import '../color/colors.css';
import '../dist/css/styles.css';

// Import sprite.
import svgSpritePath from '../dist/svg/sprite.svg';
window.svgSpritePath = svgSpritePath;

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
twigDrupalFilters(Twig);
