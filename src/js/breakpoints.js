/**
 * @file
 * Get breakpoints kaizen.breakpoints.yml in this file.
 * Usage:
 * import {addBreakpointListener} from './breakpoints';
 * addBreakpointListener('mobile_1x', () => {
 *   // YOUR CODE HERE
 * }, 250);
 */

// Since webpack >= v2.0.0, importing of JSON files will work by default.
import config from './.bp.json';
const events = ['load', 'resize'];
const defaultGroup = 'kaizen';

function addBreakpointListener(breakpoint, callback, debounce = false, group = defaultGroup) {
  let gr = config[group];
  if (gr.hasOwnProperty(breakpoint)) {
    addListeners(() => {
      if (checkQuery(gr[breakpoint])) {
        callback();
      }
    }, debounce);
  }
}

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

function initBreakpointsCssReload() {
  addListeners(setBreakpoints);
}

function setBreakpoints() {
  Object.keys(config).forEach(group => {
    let gr = config[group];
    Object.keys(gr).forEach(breakpoint => {
      let query = gr[breakpoint].toString();
      if (checkQuery(query)) {
        document.body.classList.add(group + '__' + breakpoint);
      }
      else {
        document.body.classList.remove(group + '__' + breakpoint);
      }
    });
  });
}

// TODO: Use drupal debounce here.
function debounce(func, wait, immediate) {
  let timeout;
  let result;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
}

export {initBreakpointsCssReload, addBreakpointListener};


