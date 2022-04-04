---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/src/js/init.js
---
import { initBreakpointsCssReload } from '@skilld/kaizen-breakpoints';
import config from '../../<%= h.changeCase.lower(name) %>.breakpoints.yml';

window.themeBreakpoints = config;
initBreakpointsCssReload(config);
