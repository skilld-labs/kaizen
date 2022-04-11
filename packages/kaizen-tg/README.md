# kaizen-tg

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## Requirements

- Docker-ce

Or

- Node.js
- Yarn


## Features

- PostCss
- Storybook
- Webpack
- Browsersync
- eslint
- stylelint
- Autoprefixer
- Drupal Color Module support
- Drupal breakpoints.yml config parser in css/js
- Svg sprite generation
- Several basic helpers which improves quality and perception of the web-sites. [Read more](https://www.npmjs.com/package/@skilld/kaizen-core)

## Usage

1. `cd web/themes/custom`
2. `npx @skilld/kaizen-tg` and follow instructions. Or alternative installation using Docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine npx @skilld/kaizen-tg`
3. `cd [theme_name]`
4. `yarn && yarn build` or `make install && make build` if you want to use docker instead of local


## Components creation

Run `yarn cc` from theme dir

## Storybook

Run `yarn storybook` from theme dir to init storybook

## Linting and fixing

Run `yarn lint-fix` from theme dir

## Other kaizen's packages, included into `kaizen-tg` package.
1. [kaizen-cg](https://www.npmjs.com/package/@skilld/kaizen-cg)
2. [kaizen-core](https://www.npmjs.com/package/@skilld/kaizen-core)
3. [kaizen-breakpoints](https://www.npmjs.com/package/@skilld/kaizen-breakpoints)

# License

This project is licensed under the MIT open source license.
