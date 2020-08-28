---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/color/color.inc
---
<?php

/**
 * @file
 * Lists available colors and color schemes for the <%= name %> theme.
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
        'color-1' => '#e65100',
        'color-2' => '#ff6d00',
        'color-3' => '#ff981f',
        'color-4' => '#ffca28',
        'color-5' => '#ffe57f',
        'color-6' => '#000000',
        'color-7' => '#ffffff',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'color/colors.css',
  ],

  'preview_library' => '<%= h.changeCase.lower(name) %>/color.preview',
  'preview_html' => 'color/preview.html',

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],
];
