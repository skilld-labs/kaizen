# kaizen-breakpoints

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This package contains some script which parses breakpoints from Drupal's themename/themename.breakpoints.yml and adds them into css and javascript.

## Usage

Once [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) is installed:
1. To see the list of all available breakpoints and its names which you can use in your css and js files - you can run storybook and find it here `/?path=/story/globals-variables--breakpoints` (It is Globals / Variables / Breakpoints path in storybook)
2. Syntax of usage in css files (`@db` btw means `drupal breakpoint`):
   - `@db l {}` <-- it is analogue of old `@drupal-breakpoint l_1x {}` we had in Kaizen v1
   - `@db l_1x {}`
   - `@db l_2x {}` <-- this is 2x multiplier for retina screens. We don't use usually it in css files, but this breakpoint needed for Drupal's responsive image groups, for 2x increased image styles
3. Syntax of usage in js files:
   - all breakpoints located in `window.themeBreakpoints.themeName`

## Recommendations

1. Modern example of checking if screen's width now matches one or another breakpoint:
   - `if (window.matchMedia(window.themeBreakpoints.themeName.breakpointName).matches) {}`

## Other kaizen's packages
1. [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg)
2. [kaizen-cg](https://www.npmjs.com/package/@skilld/kaizen-cg)
3. [kaizen-core](https://www.npmjs.com/package/@skilld/kaizen-core)

# License

This project is licensed under the MIT open source license.
