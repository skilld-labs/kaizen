---
to: <%= h.src() %>/components/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  <% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %> = {<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %> = {<% } %>
    defaultEntry: () => {
      return {
        className: '<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
        processingName: 'storybook-<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
      };
    },
    customEntry: () => {
      // If you need a custom entry (in case if for example in drupal
      // you have other classnames than in components) - you can create
      // a new .js file in src/js folder, and put into it the following
      // construction:
      //     (({ behaviors }) => {
      //       <% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry = () => {<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry = () => {<% } %>
      //         return [
      //           {
      //             ...your configuration,
      //           },
      //           ...etc
      //         ];
      //       };
      //     })(Drupal);
      //
      // Then, you have to attach compiled version of your newly created
      // js file to drupal. Be sure you have attached it before original
      // component's js file -> because only in this case component's
      // js can catch your custom entry.
    },
    entries: () => {
      let entries = [<% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.defaultEntry()<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.defaultEntry()<% } %>];
      if (<% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry()<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry()<% } %>) {
        entries.push(...<% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry()<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.customEntry()<% } %>);
      }
      return entries;
    },
    attach: (context) => {
      <% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.entries().forEach((entry) => {<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.entries().forEach((entry) => {<% } %>
        once(
          entry.processingName,
          `.${entry.className}`,
          context,
        ).forEach((el) => {
          <% if (typeof themeName != 'undefined') { %>behaviors.<%= h.changeCase.snakeCase(themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.handler({ el, entry });<% } else { %>behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.handler({ el, entry });<% } %>
        });
      });
    },
    handler: (obj) => {
      // eslint-disable-next-line no-console
      console.log(obj.el);
    },
  };
})(Drupal);