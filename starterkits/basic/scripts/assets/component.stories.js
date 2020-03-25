import './COMPONENT_NAME.css';
import componentNotes from './COMPONENT.md';COMPONENT_SCRIPT

const template = require('./COMPONENT.html.twig');
const data = require('./COMPONENT.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

const component = {
  title: 'COMPONENT_FULL'
}

if (componentNotes.length) {
  component.parameters = { notes: componentNotes }
}

export default component;

export const basic = () => {COMPONENT_INIT
  return template(data)
};
