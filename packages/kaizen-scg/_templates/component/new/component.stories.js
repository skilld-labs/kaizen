---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.css';
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js';
import data from './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.kaizen_component.yml'
import drupalAttribute from 'drupal-attribute';
import { useEffect } from '@storybook/client-api';

const template = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.html.twig');

export default {
  title: '<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
  argTypes: {
    content: { control: "text" },
    modifier: {
      options: data.variables.modifiers,
      control: { type: "check" },
    },
    tag: {
      options: data.variables.template_settings.tag.modifiers,
      control: { type: "radio" },
    },
  },
};

data.svgSpritePath = window.svgSpritePath;

export const basic = (args = {}) => {
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

  }
  useEffect(() => {
    window.drupalSettings.<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.lower(h.inflection.dasherize(name)) %> = {
      foo: 'bar',
    };
    window.Drupal.attachBehaviors();
  }, [args]);
  return template({
    attributes: attributes
      .removeClass(data.variables.modifiers)
      .addClass(args.modifier),
    content: {
      content: args.content,
    },
  });
};

basic.args = {
  attributes: data.variables.attributes,
  content: data.default_content.content.content,
  modifier: data.variables.modifiers[0],
  tag: data.variables.template_settings.tag.modifiers[0],
};

