import { storiesOf } from '@storybook/html';
import './link.css';

const template = require('./a-link.html.twig');
const data = require('./a-link.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms/link', module)
.add('default', () => template(data))
.add('hover', () =>
  template({
    ...data,
    modifier_class: 'a-link--hover',
  }),
)
.add('focus', () =>
  template({
    ...data,
    modifier_class: 'a-link--focus',
  }),
);

