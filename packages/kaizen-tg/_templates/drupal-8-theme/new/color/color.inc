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
<% if(type==='primary'){ -%>
    'color-8' => t('Color 8'),
    'color-9' => t('Color 9'),
    'color-10' => t('Color 10'),
    'color-11' => t('Color 11'),
    'color-12' => t('Color 12'),
    'color-13' => t('Color 13'),
<% } -%>
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
<% if(type==='core'){ -%>
        'color-1' => '#e65100',
        'color-2' => '#ff6d00',
        'color-3' => '#ff981f',
        'color-4' => '#ffca28',
        'color-5' => '#ffe57f',
        'color-6' => '#000000',
        'color-7' => '#ffffff',
<% } -%>
<% if(type==='primary'){ -%>
        'color-1' => '#ffffff',
        'color-2' => '#000000',
        'color-3' => '#484848',
        'color-4' => '#f7f7f7',
        'color-5' => '#07beb8',
        'color-6' => '#3dccc7',
        'color-7' => '#68d8d6',
        'color-8' => '#9cefef',
        'color-9' => '#cbebeb',
        'color-10' => '#ff5353',
        'color-11' => '#ffd0d0',
        'color-11' => '#4fc695',
        'color-11' => '#e3aa42',
<% } -%>
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
