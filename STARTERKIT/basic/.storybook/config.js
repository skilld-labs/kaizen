import { configure } from '@storybook/html';

// Extend Twig.js with drupal filters.
const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
twigDrupal(Twig);

// Import global styles.
import '../dist/css/styles.css';

function loadStories() {
  const req = require.context('../src/css/components/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
