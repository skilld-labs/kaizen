---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component sctipt template.
 */

export default ({ className = '.<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>', context = document } = {}) => {
  Array.prototype.forEach.call(context.querySelectorAll(className), el => {
    // eslint-disable-next-line no-console
    console.log(el);
  });
};
