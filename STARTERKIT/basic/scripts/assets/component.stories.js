import { storiesOf } from '@storybook/html';
import './COMPONENT_NAME.css';

const template = require('./COMPONENT.html.twig');
const data = require('./COMPONENT.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('COMPONENT_TYPE|COMPONENT_NAME', module)
  .add('default', () => template(data));
