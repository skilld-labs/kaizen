import { storiesOf } from '@storybook/html';
import './input.css';


const template = require('./a-input.html.twig');
const data = require('./a-input.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('atoms|input', module)
.add('default', () => template(data))
.add('focus', () =>
  template({
    ...data,
    modifier_class: 'a-input__element--focus',
  }),
)
.add('filled', () =>
  template({
    ...data,
    value: 'Filled input',
  }),
)
.add('error', () =>
  template({
    ...data,
    modifier_class: 'a-input__element--error',
  }),
)
.add('error-focus', () =>
  template({
    ...data,
    modifier_class: 'a-input__element--error a-input__element--error--focus',
  }),
);
