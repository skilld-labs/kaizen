/**
 * @file
 * This is simple js for management of color module display.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.color = {
    logoChanged: false,
    callback: function callback(context, settings, $form) {

      var $colorPreview = $form.find('.color-preview .brands__item > div:first-of-type');
      var $colorPalette = $form.find('.js-color-palette');

      $.each($colorPreview, function () {
        $(this).css('backgroundColor', $colorPalette.find('input[name="palette[' + $(this).attr('class') + ']"]').val());
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
