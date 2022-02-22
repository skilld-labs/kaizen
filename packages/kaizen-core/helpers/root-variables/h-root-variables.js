/**
 * @file
 * This is component sctipt template.
 */

const hRootVariablesHandler = () => {
  document.documentElement.style.setProperty(
    '--window-width',
    `${window.innerWidth}px`,
  );
  document.documentElement.style.setProperty(
    '--window-height',
    `${window.innerHeight}px`,
  );
};

const body = once('h-root-variables', document.documentElement).shift();
if (body) {
  hRootVariablesHandler();
  window.addEventListener('resize', () => {
    hRootVariablesHandler();
  });
}
