<?php

/**
 * @file
 * Lists available colors and color schemes for the Kaizen theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'color-1' => t('Color 1'),
    'color-2' => t('Color 2'),
    'color-3' => t('Color 3'),
    'color-4' => t('Color 4'),
    'color-5' => t('Color 5'),
    'color-6' => t('Color 6'),
    'color-7' => t('Color 7'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
        'color-1' => '#ffffff',
        'color-2' => '#000000',
        'color-3' => '#07beb8',
        'color-4' => '#3dccc7',
        'color-5' => '#68d8d6',
        'color-6' => '#9cefef',
        'color-7' => '#c4fff9',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'color/colors.css',
  ],

  'preview_library' => 'kaizen/color.preview',
  'preview_html' => 'color/preview.html',

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],
];
