import { configure } from '@storybook/html';

// Import global styles.
import '../color/colors.css';
import '../dist/css/styles.css';

import Twig from 'twig';
// Extend Twig.js with drupal filters.
import twigDrupalFilters from 'twig-drupal-filters';
twigDrupalFilters(Twig);

function loadStories() {
  const req = require.context('../packages/components/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
