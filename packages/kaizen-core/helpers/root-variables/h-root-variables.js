/**
 * @file
 * This is component sctipt template.
 */

const hRootVariablesHandler = () => {
  document.documentElement.style.setProperty(
    '--viewport-width',
    `${document.documentElement.clientWidth}px`,
  );
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.innerHeight}px`,
  );
};

(({ behaviors }) => {
  behaviors.kaizen_core_h_root_variables = {
    attach: (context) => {
      const body = once(
        'h-root-variables',
        document.documentElement,
        context,
      ).unshift();
      if (body) {
        hRootVariablesHandler();
        ['load', 'resize'].forEach((event) =>
          window.addEventListener(event, () => hRootVariablesHandler()),
        );
      }
    },
  };
})(Drupal);
