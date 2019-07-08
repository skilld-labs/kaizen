import { storiesOf } from '@storybook/html';
import './button.css';
import button from './a-button';

const template = require('./a-button.html.twig');
const data = require('./a-button.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('atoms|button', module).add('default', () => {
  document.addEventListener(
    'DOMNodeInserted',
    () => {
      button();
    },
    false,
  );
  return template(data);
});
