<?php

/**
 * @file
 * Lists available colors and color schemes for the Kaizen theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'black' => t('Black'),
    'white' => t('White'),
    'color_1' => t('Color 1'),
    'color_2' => t('Color 2'),
    'color_3' => t('Color 3'),
    'color_4' => t('Color 4'),
    'color_5' => t('Color 5'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
        'black'   =>  '#000',
        'white'   => '#fff',
        'color_1' => '#e65100',
        'color_2' => '#ff6d00',
        'color_3' => '#ff981f',
        'color_4' => '#ffca28',
        'color_5' => '#ffe57f',
      ],
    ],
    'alternate' => [
      'title' => t('Alternate Palette'),
      'colors' => [
        'black'   =>  '#000',
        'white'   => '#fff',
        'color_1' => '#7d0000',
        'color_2' => '#d00000',
        'color_3' => '#ff3d2e',
        'color_4' => '#fb8c8c',
        'color_5' => '#ffcdd2',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'color/colors.css'
  ],

  'preview_library' => 'kaizen/color.preview',
  'preview_html' => 'color/preview.html',

  // Files to copy.
  'copy' => [],
];
