import { storiesOf } from '@storybook/html';
import './radio.css';

const template = require('./a-radio.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms/radio', module)
.add('default', () => template())
.add('hover', () =>
  template({
    custom_class: 'a-radio__custom--hover',
  }),
)
.add('focus', () =>
  template({
    custom_class: 'a-radio__custom--focus',
  }),
)
.add('checked', () =>
  template({
    custom_class: 'a-radio__custom--checked',
    marker_class: 'a-radio__marker--checked',
  }),
)
.add('error', () =>
  template({
    custom_class: 'a-radio__custom--error',
  }),
);
