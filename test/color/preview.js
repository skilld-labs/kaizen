/**
 * @file
 * This is simple js for management of color module display.
 */

(function (Drupal) {
  Drupal.color = {
    logoChanged: false,
    callback: function callback(context, settings, $form) {
      const $colorPreview = $form[0].querySelectorAll('.color-preview .colors__item > div:first-of-type');
      const $colorPalette = $form[0].querySelectorAll('.js-color-palette');

      for (let i = 0; i < $colorPreview.length; i++) {
        $colorPreview[i].style.backgroundColor = $colorPalette[0].querySelectorAll('input[name="palette[' +
          $colorPreview[i].getAttribute('class') + ']"]')[0].value
      }
    }
  };
})(Drupal);
