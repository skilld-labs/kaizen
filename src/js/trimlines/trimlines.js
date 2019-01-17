/**
 * @file
 * This is the global trimlines functionality.
 *
 * `line_clamps` is global config with CSS selector, trim value and optional breakpoints trims.
 *
 * If browser supports `-webkit-clamp-lines` will be used trimCSS, else trimJs.
 */

import lineClamp from 'line-clamp';
import modernizr from '../.modernizrrc';
import trimmedElements from './line-clamps';
import {addBreakpointListener} from '../breakpoints';

(function (Drupal, $, lineClamp) {
  Drupal.behaviors.challengeTrimText = {
    attach: function (context, settings) {
      this.claimSupported = this.isClampSupported();
      for (let element of Object.values(trimmedElements)) {
        this.init(element);
      }
    },
    init: function (el) {
      for (let breakpoint in el.breakpoints) {
        if (el.breakpoints.hasOwnProperty(breakpoint)) {
          addBreakpointListener(breakpoint, () => {
            this.trim(el.selector, el.breakpoints[breakpoint], el.forceJs);
          });
        }
        else {
          this.trim(el.selector, el.trim, el.forceJs);
        }
      }
    },
    isClampSupported: function () {
      // Check `-webkit-line-clamp` support.
      return modernizr.testAllProps('lineClamp');
    },
    removeClampCss: function (el) {
      for (let className of Array.from(el.classList)) {
        if (className.startsWith('line-clamp-')) {
          el.classList.remove(className);
        }
      }
    },
    trim: function (el, lines, forceJs = false) {
      this.wrapChildren(el);
      if (this.claimSupported && !forceJs) {
        this.trimCss(el, lines);
      }
      else {
        this.trimJs(el, lines);
      }
    },
    trimJs: function (selector, lines) {
      let elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++) {
        let el = elements[i];
        let clampWrapper = el.querySelector('.clamp-wrapper');
        lineClamp(clampWrapper, lines);
      }
    },
    trimCss: function (selector, lines) {
      let elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++) {
        let el = elements[i];
        let clampWrapper = el.querySelector('.clamp-wrapper');
        this.removeClampCss(clampWrapper);
        clampWrapper.classList.add('line-clamp-' + lines);
      }
    },
    wrapChildren: function (el) {
      if ($('.clamp-wrapper', el).length < 1) {
        $(el).wrapInner("<div class='clamp-wrapper'></div>");
      }
    }
  };
})(Drupal, jQuery, lineClamp);
