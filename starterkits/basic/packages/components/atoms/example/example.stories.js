import { withKnobs, select, text } from '@storybook/addon-knobs';
import './example.css';
import componentNotes from './a-example.md';
import componentAdditionalNotes from './a-example--with-knobs.md';

const template = require('./example.html.twig');
const data = require('./example.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
import drupalAttribute from 'drupal-attribute';
data.attributes = new drupalAttribute();

const component = {
  title: 'atoms|example',
  decorators: [withKnobs]
}

if (componentNotes.length) {
  component.parameters = { notes: componentNotes }
}

export default component;

export const basic = () => template(data);
export const withTwigAndKnobs = () => {
  const options = {
    default: '',
    withModifier: 'example--with-modifier',
  };
  const defaultValue = 'example';
  const value = select("modifier class", options, defaultValue);
  const attibutes = new drupalAttribute();
  attibutes.addClass(value);
  const knobsText = text("text", "default text");
  return template({ "attributes": attibutes, "text": knobsText });
}

withTwigAndKnobs.story = {
  parameters: {
    notes: {
      default: componentNotes,
      additional: componentAdditionalNotes
    }
  },
};
