---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/src/js/init.js
---
import '@skilld/kaizen-core/helpers/focus-visible/h-focus-visible';
import '@skilld/kaizen-core/helpers/root-variables/h-root-variables';
import config from '../../<%= h.changeCase.lower(name) %>.breakpoints.yml';

window.themeBreakpoints = config;

(({ behaviors }) => {
  behaviors.<%= h.changeCase.lower(name) %>SvgSpritePath = {
    attach: (context, settings) => {
      window.<%= h.changeCase.lower(name) %>SvgSpritePath = settings.<%= h.changeCase.lower(name) %>SvgSpritePath;
    },
  };
})(Drupal);