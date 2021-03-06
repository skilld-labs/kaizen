import { storiesOf } from '@storybook/html';
import './checkbox.css';

const template = require('./a-checkbox.html.twig');
const data = {}
data.svgSpritePath = window.svgSpritePath

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms/checkbox', module)
.add('default', () =>
  template(data),
)
.add('hover', () =>
  template({
    ...data,
    custom_class: 'a-checkbox__custom--hover',
  }),
)
.add('focus', () =>
  template({
    ...data,
    custom_class: 'a-checkbox__custom--focus',
  }),
)
.add('checked', () =>
  template({
    ...data,
    custom_class: 'a-checkbox__custom--checked',
    icon_class: 'a-checkbox__icon--checked',
  }),
)
.add('error', () =>
  template({
    ...data,
    custom_class: 'a-checkbox__custom--error',
  }),
);
