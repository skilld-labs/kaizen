import cssVars from 'css-vars-ponyfill';
import { initBreakpointsCssReload } from '@skilld/kaizen-breakpoints';
import { polyfill as spritePolyfill } from '@skilld/kaizen-svg-sprite';
import modernizr from './.modernizrrc';
import config from '../../kaizen.breakpoints.yml';

initBreakpointsCssReload(config);

document.addEventListener('DOMContentLoaded', () => {
  spritePolyfill();
});

// Add css-vars-ponyfill if it's not support.
if (!modernizr.testAllProps('customproperties')) {
  cssVars();
}
