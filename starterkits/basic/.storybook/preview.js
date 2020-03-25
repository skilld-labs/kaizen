import { addParameters } from '@storybook/html';
import defaultNotes from './instructions.md';

// Import global styles.
import '../color/colors.css';
import '../dist/css/styles.css';

// Uncomment if you need to have sprite.
// import spritePath from '../dist/svg/sprite.svg';

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
twigDrupalFilters(Twig);

// Add default instructions file.
addParameters({
  notes: defaultNotes
});
