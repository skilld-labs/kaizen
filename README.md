# kaizen

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This is a developer theme for Drupal 8+
- It includes everything necessary to start theming : modern tools, 2 starterkits theme


## Requirements

- Docker-ce

Or

- Node.js
- Yarn


## Features

- PostCss
- Webpack
- Babel
- Browsersync
- eslint
- Autoprefixer
- Drupal Color Module support
- Drupal breakpoints.yml config parser in css/js
- Svg sprite generation


# Usage

1. Clone into the directory of your local Drupal site
1. If used with [skilld-docker-container](https://github.com/skilld-labs/skilld-docker-container), install project using not `make all` but `make_ci` to skip `make front` step.
1. `cd web/themes/custom`
1. Execute initialisation, either :
    - with Docker : `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node:lts npx skilld-labs/kaizen`
    - with Node & Yarn : `npx skilld-labs/kaizen`
1. Go through installation steps :
    - Basic - Empty theme to use for custom theming
    - Primary - Prethemed version to use in case of prototyping
1. CD to new directory (theme name from previous step) then:
    - `make install`
    - `make build`
1. Go to drupal admin area. Enable new theme. Clear cache.


### Testing additional info

- If new branch should be tested and it is not merged yet, on step #3 change `npx skilld-labs/kaizen` to `npx skilld-labs/kaizen#BRANCH_NAME` where `BRANCH_NAME` is branch of feature you want to test from https://github.com/skilld-labs/kaizen/branches


## License

This project is licensed under the MIT open source license.

