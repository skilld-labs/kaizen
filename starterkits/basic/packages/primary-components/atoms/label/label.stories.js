import { storiesOf } from '@storybook/html';
import './label.css';

const template = require('./a-label.html.twig');
const data = require('./a-label.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('atoms|label', module)
  .add('default', () =>
    template(data)
  )
  .add('above', () =>
    template({
      ...data,
      modifier_class: 'a-label--above',
    }),
  )
  .add('inline', () =>
    template({
      ...data,
      modifier_class: 'a-label--inline',
    }),
  );
