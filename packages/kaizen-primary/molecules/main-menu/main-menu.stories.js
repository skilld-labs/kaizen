import { storiesOf } from '@storybook/html';
import './main-menu.css';

const template = require('./m-main-menu.html.twig');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('molecules/main-menu', module).add('default', () => template());
