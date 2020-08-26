import './example.css';

const template = require('./example.html.twig');
const data = require('./example.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
import drupalAttribute from 'drupal-attribute';
data.attributes = new drupalAttribute();

const component = {
  title: 'atoms/example',
}

export default component;

export const basic = () => template(data);
