// Import global styles.
import '../color/colors.css';
import '../dist/css/styles.css';
import config from '../kaizen.breakpoints.yml';
window.themeBreakpoints = config;

// Import sprite.
import svgSpritePath from '../dist/svg/sprite.svg';
window.svgSpritePath = svgSpritePath;

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
twigDrupalFilters(Twig);
