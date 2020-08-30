import { storiesOf } from '@storybook/html';
import './logo.css';


const template = require('./a-logo.html.twig');
const data = require('./a-logo.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();


storiesOf('atoms/logo', module).add('default', () => template(data));

