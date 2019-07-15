import { storiesOf } from '@storybook/html';
import './slider.css';
import slider from './o-slider';

const template = require('./o-slider.html.twig');
const data = require('./o-slider.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('organisms|slider', module).add('default', () => {
  document.addEventListener(
    'DOMNodeInserted',
    () => {
      slider();
    },
    false,
  );
  return template(data);
});

