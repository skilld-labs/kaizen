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
    'brand_1' => t('Brand 1'),
    'brand_2' => t('Brand 2'),
    'brand_3' => t('Brand 3'),
    'brand_4' => t('Brand 4'),
    'brand_5' => t('Brand 5'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
        'black'   =>  '#000',
        'white'   => '#fff',
        'brand_1' => '#e65100',
        'brand_2' => '#ff6d00',
        'brand_3' => '#ff981f',
        'brand_4' => '#ffca28',
        'brand_5' => '#ffe57f',
      ],
    ],
    'alternate' => [
      'title' => t('Alternate Palette'),
      'colors' => [
        'black'   =>  '#000',
        'white'   => '#fff',
        'brand_1' => '#7d0000',
        'brand_2' => '#d00000',
        'brand_3' => '#ff3d2e',
        'brand_4' => '#fb8c8c',
        'brand_5' => '#ffcdd2',
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
