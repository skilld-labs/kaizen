---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component script template.
 */

const <%= h.changeCase.lower(component_type).charAt(0) %><%= h.inflection.camelize(name.replace(/ /g, '').replace(/-/g, '_')) %> = ({
  className = '<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
  processingName = className,
  context = document,
} = {}) => {
  once(processingName, `.${className}`, context).forEach((el) => {
    // eslint-disable-next-line no-console
    console.log(el);
  });
};

(({ behaviors }) => {
  behaviors.kaizen<%= h.inflection.capitalize(component_type) %><%= h.inflection.capitalize(name) %>Behaviour = {
    attach(context, settings) {
      <%= h.changeCase.lower(component_type).charAt(0) %><%= h.inflection.camelize(name.replace(/ /g, '').replace(/-/g, '_')) %>({ context, settings });
    },
  };
})(Drupal);