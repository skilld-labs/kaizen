---
to: <%= h.src() %>/packages/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  <% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %> = {<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %> = {<% } %>
    entries: () => {
      return [
        {
          className: '<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
          processingName: 'storybook-<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
        },
      ];
    },
    attach: (context) => {
      <% if (typeof themeName != 'undefined') { %>Drupal.behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.entries().forEach((entry) => {<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.entries().forEach((entry) => {<% } %>
        once(
          entry.processingName,
          `.${entry.className}`,
          context,
        ).forEach((el) => {
          <% if (typeof themeName != 'undefined') { %>Drupal.behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.handler(el, entry);<% } else { %>Drupal.behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.handler(el, entry);<% } %>
        });
      });
    },
    handler: (el, entry) => {
      // eslint-disable-next-line no-console
      console.log(el, entry);
    },
  };
})(Drupal);