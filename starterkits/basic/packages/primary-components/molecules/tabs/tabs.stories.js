import { storiesOf } from '@storybook/html';
import './tabs.css';

const template = require('./m-tabs.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules|tabs', module).add('default', () => template());
