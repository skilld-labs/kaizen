import cssVars from 'css-vars-ponyfill';
import { initBreakpointsCssReload } from '@skilld/kaizen-breakpoints';
import { polyfill as spritePolyfill } from '@skilld/kaizen-svg-sprite';
import config from '../../kaizen.breakpoints.yml';

initBreakpointsCssReload(config);

document.addEventListener('DOMContentLoaded', () => {
  spritePolyfill();
});

cssVars();
