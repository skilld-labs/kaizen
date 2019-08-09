import { storiesOf } from '@storybook/html';
import './icons.css';
import sprite from '../../../../dist/svg/sprite.svg';

const template = require('./a-icons.html.twig');
const icons = require.context('../../../../images/svg/', false, /\.svg$/);
const filenames = [];

icons.keys().forEach((filename, index) => {
  filenames[index] = filename.split('.')[1].split('/')[1];
});

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms|icons', module).add('default', ()  => template({ sprite, filenames }));
