import { storiesOf } from '@storybook/html';
import './footer.css';

const template = require('./o-footer.html.twig');
const data = require('./o-footer.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

storiesOf('organisms/footer', module).add('default', () => template(data));
