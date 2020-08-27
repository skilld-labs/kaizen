import debounce from 'lodash.debounce';

const events = ['load', 'resize'];
const defaultGroup = 'kaizen';

function addListeners(callback, withDebounce = false, config) {
  events.forEach(e => {
    let func = () => callback(config);
    if (withDebounce && e === 'resize') {
      func = debounce(() => callback(config), withDebounce, config);
    }
    window.addEventListener(e, func);
  });
}

function checkQuery(query) {
  return window.matchMedia(query).matches;
}

function setBreakpoints(config) {
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
  config
) {
  const gr = config[group];
  if (gr.hasOwnProperty(breakpoint)) {
    addListeners(() => {
      if (checkQuery(gr[breakpoint])) {
        callback();
      }
    }, db, config);
  }
}

function initBreakpointsCssReload(config) {
  addListeners(setBreakpoints, false, config);
}

export { initBreakpointsCssReload, addBreakpointListener };
