/**
 * @file
 * This is component sctipt template.
 */

const hRootVariablesHandler = () => {
  document.documentElement.style.setProperty(
    '--viewport-width',
    `${window.innerWidth}px`,
  );
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.innerHeight}px`,
  );
};

const body = once('h-root-variables', document.documentElement).shift();
if (body) {
  hRootVariablesHandler();
  ['load', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
      hRootVariablesHandler();
    });
  })
}
