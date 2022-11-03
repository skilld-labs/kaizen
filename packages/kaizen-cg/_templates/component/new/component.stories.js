---
to: <%= h.src() %>/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.css';
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js';
import drupalAttribute from 'drupal-attribute';
import { useEffect } from '@storybook/client-api';
const template = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.html.twig');
const data = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.json');

export default {
  title: '<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.sentenceCase(name) %>',
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  // argTypes: {},
};
<% if (typeof themeName != 'undefined') { %>
data.<%= h.changeCase.snakeCase(themeName) %>SvgSpritePath = window.<%= h.changeCase.snakeCase(themeName) %>SvgSpritePath;
<% } else { %>
data.<%= h.changeCase.snakeCase(h.themeName) %>SvgSpritePath = window.<%= h.changeCase.snakeCase(h.themeName) %>SvgSpritePath;
<% } %>
const basicRender = (args) => {
  const attributes = new drupalAttribute();
  if (args.attributes) {
    for (const [attrName, attrValue] of Object.entries(args.attributes)) {
      if (attrName === 'class') {
        attributes.addClass(attrValue);
      }
      else {
        attributes.setAttribute(attrName, attrValue);
      }
    }

    delete args.attributes;
  }
  data.attributes = attributes;
  useEffect(() => {
    // Uncomment next line if you need javascript in your component.
    <% if (typeof themeName != 'undefined') { %>// Drupal.behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.attach();<% } else { %>// Drupal.behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.attach();<% } %>
  }, [args]);
  return template(data)
};

export const basic = (args = {}) => {
  return basicRender(args);
};
