import { storiesOf } from '@storybook/html';
import './select.css';
import select from './a-select';
import svgSprite from '../../../../dist/svg/sprite.svg';

const template = require('./a-select.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms|select', module)
.add('default', () => {
  document.addEventListener(
    'DOMNodeInserted',
    () => {
      select({ svgSpritePath: svgSprite });
    },
    false,
  );
  return template();
});
