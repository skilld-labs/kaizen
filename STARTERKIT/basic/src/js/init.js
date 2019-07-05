import cssVars from 'css-vars-ponyfill';
import svg4everybody from 'svg4everybody';
import modernizr from './.modernizrrc';
import { initBreakpointsCssReload } from './breakpoints';

// TODO: Check if css classes need to be reloaded by default.
// https://i.gyazo.com/67cc358aca4e7216e587a740b9f96b99.gif
initBreakpointsCssReload();
// Add css-vars-ponyfill if it's not support.
if (!modernizr.testAllProps('customproperties')) {
  cssVars();
}

svg4everybody();