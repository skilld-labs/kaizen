import './COMPONENT_NAME.css';
COMPONENT_SCRIPT

const template = require('./COMPONENT.html.twig');
const data = require('./COMPONENT.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

const component = {
  title: 'COMPONENT_FULL'
}

export default component;

export const basic = () => {COMPONENT_INIT
  return template(data)
};
