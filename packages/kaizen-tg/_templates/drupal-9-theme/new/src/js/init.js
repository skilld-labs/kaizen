---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/src/js/init.js
---
import '@skilld/kaizen-core/helpers/focus-visible/h-focus-visible';
import '@skilld/kaizen-core/helpers/root-variables/h-root-variables';
import config from '../../<%= h.changeCase.lower(name) %>.breakpoints.yml';

window.themeBreakpoints = config;
