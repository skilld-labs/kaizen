---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component script template.
 */

export default ({
  className = '<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
  processingName = className,
  context = document,
  themeName = '<%= h.themeName %>',
} = {}) => {
  once(processingName, `.${className}`, context).forEach((el) => {
    // eslint-disable-next-line no-console
    console.log(themeName, el);
  });
};
