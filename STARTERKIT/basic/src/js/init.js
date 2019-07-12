import cssVars from 'css-vars-ponyfill';
import svg4everybody from 'svg4everybody';
import slider from '@kaizen/components/organisms/slider/o-slider';
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

// Attached in drupal behaviours for example.
(({ behaviors }) => {
  behaviors.kaizenTestSliderBehaviour = {
    attach(context) {
      slider({
        className: '.view-id-frontpage > .view-content > .glide',
        context,
      });
    },
  };
})(Drupal);
