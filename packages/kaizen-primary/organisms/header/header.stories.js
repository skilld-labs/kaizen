import { storiesOf } from '@storybook/html';
import './header.css';

const template = require('./o-header.html.twig');
const data = require('./o-header.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('organisms/header', module).add('default', () => template(data));
