import { storiesOf } from '@storybook/html';
import './radio.css';

const template = require('./a-radio.html.twig');
const data = require('./a-radio.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|radio', module)
.add('default', () => template(data))
.add('hover', () =>
  template({
    ...data,
    custom_class: 'a-radio__custom--hover',
  }),
)
.add('focus', () =>
  template({
    ...data,
    custom_class: 'a-radio__custom--focus',
  }),
)
.add('checked', () =>
  template({
    ...data,
    custom_class: 'a-radio__custom--checked',
    marker_class: 'a-radio__marker--checked',
  }),
)
.add('error', () =>
  template({
    ...data,
    custom_class: 'a-radio__custom--error',
  }),
);
