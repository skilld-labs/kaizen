import './_variables.css';
import './label.css';
import drupalAttribute from 'drupal-attribute';
import componentNotes from './a-label.md';

const template = require('./a-label.html.twig');
const data = require('./a-label.json');

const component = {
  title: 'atoms/label',
};

if (componentNotes.length) {
  component.parameters = { notes: componentNotes };
}

export default component;

export const basic = (args = {}) => {
  const modifier_class = args ? args.modifier_class : '';
  const text = args ? args.text : '';
  const label_for = args ? args.label_for : '';
  const normailzedText = !text ? data.content.label_text : text;
  data.attributes = new drupalAttribute();
  data.attributes.addClass('a-label');
  data.attributes.addClass(modifier_class);
  data.text = normailzedText;
  if (label_for) {
    data.attributes.setAttribute('for', label_for);
  }
  return template(data);
};
