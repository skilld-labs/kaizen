import modernizr from './.modernizrrc';
import {initBreakpointsCssReload} from './breakpoints';
import cssVars from 'css-vars-ponyfill';

// TODO: Check if css classes need to be reloaded by default.
// https://i.gyazo.com/67cc358aca4e7216e587a740b9f96b99.gif
initBreakpointsCssReload();
// Add css-vars-ponyfill if it's not support.
if (!modernizr.testAllProps('customproperties')) {
  cssVars();
}

import 'project-components/components/atoms/test/a-test';
