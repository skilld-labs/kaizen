import './_variables.css';
import './tabs.css';
import { useEffect } from '@storybook/client-api';
import componentNotes from './m-tabs.md';
import tabs from './m-tabs';

const template = require('./m-tabs.html.twig');
const data = require('./m-tabs.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...)
// }} or similar logic. import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

const component = {
  title: 'molecules/tabs',
};

if (componentNotes.length) {
  component.parameters = { notes: componentNotes };
}

export default component;

export const basic = (args = {}) => {
  data.tabs = args.tabs ? args.tabs : data.tabs;
  useEffect(() => {
    tabs();
  }, []);
  return template({
    ...data,
    ...args,
  });
};
