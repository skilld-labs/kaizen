# kaizen-breakpoints

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This package contains some script which parses breakpoints from themename/themename.breakpoints.yml and adds them into css and javascript.

## Usage

1. This package is added as a dependency for [@skilld/kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) package, so normally once theme is install - you have `kaizen-breakpoints` already under the hood installed.
2. To see the list of all available breakpoints and its names which you can use in your css and js files - you can run storybook and find it here `/?path=/story/globals-variables--breakpoints` (It is Globals / Variables / Breakpoints) path in storybook
3. Syntax of usage in css files:
   - `@db l {}` <-- it is analogue of old `@drupal-breakpoint l_1x {}` we had in Kaizen v1
   - `@db l_1x {}`
   - `@db l_2x {}` <-- this is 2x multiplier for retina screens. We don't use usually it in css files, but this breakpoint needed for Drupal's responsive image groups, for 2x increased image styles.
4. Syntax of usage in js files:
   - all breakpoints located in `window.themeBreakpoints.themeName`

## Recommendations

5. Modern example of checking if screen's width now matches one or another breakpoint:
   - `if (window.matchMedia(window.themeBreakpoints.themeName.breakpointName).matches) {}`

# License

This project is licensed under the MIT open source license.
