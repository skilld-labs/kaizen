import { storiesOf } from '@storybook/html';
import './input.css';


const template = require('./a-input.html.twig');
const data = require('./a-input.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('atoms|input', module).add('default', () => template(data));

