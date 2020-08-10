import { addParameters, addDecorator } from '@storybook/html';
import { withPaddings } from 'storybook-addon-paddings';
import defaultNotes from './instructions.md';

// Import global styles.
import '../color/colors.css';
import '../dist/css/styles.css';

// Uncomment if you need to have sprite.
// import svgSpritePath from '../dist/svg/sprite.svg';
// window.svgSpritePath = svgSpritePath;

// Extend Twig.js with drupal filters.
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
twigDrupalFilters(Twig);

addDecorator(withPaddings);

// Add default instructions file.
addParameters({
  notes: defaultNotes,
  paddings: [
    { name: 'Small', value: '24px' },
    { name: 'Medium', value: '32px' },
    { name: 'Large', value: '64px' },
  ],
});
