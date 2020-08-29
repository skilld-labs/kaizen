import { storiesOf } from '@storybook/html';
import './heading.css';

const template = require('./a-heading.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('atoms/heading', module).add('default', () => template());

