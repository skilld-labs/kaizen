---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.css';
import componentNotes from './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.md';
import <%= h.inflection.camelize(name.replace(/ /g, '').replace(/-/g, '_'), true) %> from './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js';
import { useEffect } from "@storybook/client-api";

const template = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.html.twig');
const data = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

const component = {
  title: '<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>'
}

if (componentNotes.length) {
  component.parameters = { notes: componentNotes }
}

export default component;

export const basic = () => {
  useEffect(() => {
    <%= h.inflection.camelize(name.replace(/ /g, '').replace(/-/g, '_'), true) %>();
  }, []);
  return template(data)
};
