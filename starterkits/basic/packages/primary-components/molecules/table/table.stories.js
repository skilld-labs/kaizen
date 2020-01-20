import { storiesOf } from '@storybook/html';
import './table.css';

const template = require('./m-table.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|table', module).add('default', () => template());
