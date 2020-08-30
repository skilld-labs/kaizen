import { storiesOf } from '@storybook/html';
import './select.css';
import select from './a-select';

const template = require('./a-select.html.twig');
const data = {}
data.svgSpritePath = window.svgSpritePath

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms/select', module)
.add('default', () => {
  document.addEventListener(
    'DOMNodeInserted',
    () => {
      select();
    },
    false,
  );
  return template();
});
