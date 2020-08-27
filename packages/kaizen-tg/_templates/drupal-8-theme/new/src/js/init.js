---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/src/js/init.js
---
import cssVars from 'css-vars-ponyfill';
import { initBreakpointsCssReload } from '@skilld/kaizen-breakpoints';
import { polyfill as spritePolyfill } from '@skilld/kaizen-svg-sprite';
import config from '../../<%= h.changeCase.lower(name) %>.breakpoints.yml';

initBreakpointsCssReload(config);

document.addEventListener('DOMContentLoaded', () => {
  spritePolyfill();
});

cssVars();
