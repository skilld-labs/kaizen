---
to: <%= h.src() %>/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.md
---
# <%= component_type %> / <%= h.inflection.humanize(name) %>

<%= description %>
