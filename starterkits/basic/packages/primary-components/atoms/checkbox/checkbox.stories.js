import { storiesOf } from '@storybook/html';
import './checkbox.css';
import svgSprite from '../../../../dist/svg/sprite.svg';

const template = require('./a-checkbox.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms|checkbox', module)
.add('default', () =>
  template(),
)
.add('hover', () =>
  template({
    custom_class: 'a-checkbox__custom--hover',
  }),
)
.add('focus', () =>
  template({
    custom_class: 'a-checkbox__custom--focus',
  }),
)
.add('checked', () =>
  template({
    sprite: svgSprite,
    custom_class: 'a-checkbox__custom--checked',
    icon_class: 'a-checkbox__icon--checked',
  }),
)
.add('error', () =>
  template({
    custom_class: 'a-checkbox__custom--error',
  }),
);
