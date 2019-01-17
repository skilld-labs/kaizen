import modernizr from './.modernizrrc';
import {initBreakpointsCssReload} from './breakpoints';
import cssVars from 'css-vars-ponyfill';

// Uncomment next import if you need trimming feature on the project.
// import './trimlines/trimlines';

// TODO: Check if css classes need to be reloaded by default.
// https://i.gyazo.com/67cc358aca4e7216e587a740b9f96b99.gif
initBreakpointsCssReload();
// Add css-vars-ponyfill if it's not support.
if (!modernizr.testAllProps('customproperties')) {
  cssVars();
}
