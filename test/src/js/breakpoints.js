/**
 * @file
 * Get breakpoints test.breakpoints.yml in this file.
 *
 * Usage:
 * import {addBreakpointListener} from './breakpoints';
 * addBreakpointListener('mobile_1x', () => {
 *   // YOUR CODE HERE
 * }, 250);
 */

import debounce from 'lodash.debounce';
// eslint-disable-next-line import/no-unresolved
const config = require('../../test.breakpoints.yml');

const events = ['load', 'resize'];
const defaultGroup = 'test';

function addListeners(callback, withDebounce = false) {
  events.forEach(e => {
    let func = callback;
    if (withDebounce && e === 'resize') {
      func = debounce(callback, withDebounce);
    }
    window.addEventListener(e, func);
  });
}

function checkQuery(query) {
  return window.matchMedia(query).matches;
}

function setBreakpoints() {
  Object.keys(config).forEach(group => {
    const gr = config[group];
    Object.keys(gr).forEach(breakpoint => {
      const query = gr[breakpoint].toString();
      if (checkQuery(query)) {
        document.body.classList.add(`${group}__${breakpoint}`);
      } else {
        document.body.classList.remove(`${group}__${breakpoint}`);
      }
    });
  });
}

function addBreakpointListener(
  breakpoint,
  callback,
  db = false,
  group = defaultGroup,
) {
  const gr = config[group];
  if (gr.hasOwnProperty(breakpoint)) {
    addListeners(() => {
      if (checkQuery(gr[breakpoint])) {
        callback();
      }
    }, db);
  }
}

function initBreakpointsCssReload() {
  addListeners(setBreakpoints);
}

export { initBreakpointsCssReload, addBreakpointListener };
