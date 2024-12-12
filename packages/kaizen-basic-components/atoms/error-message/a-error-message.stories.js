import './_variables.css';
import './error-message.css';
import drupalAttribute from 'drupal-attribute';
import componentNotes from './a-error-message.md';

const template = require('./a-error-message.html.twig');
const data = require('./a-error-message.json');

const component = {
  title: 'atoms/error message',
};

if (componentNotes.length) {
  component.parameters = { notes: componentNotes };
}

export default component;

export const basic = ({
    modifier_class = '',
    text = '',
  }) => {
  const normailzedText = !text ? data.content.error_text : text;
  data.attributes = new drupalAttribute();
  data.attributes.addClass(modifier_class);
  data.text = normailzedText;
  return template(data);
};
