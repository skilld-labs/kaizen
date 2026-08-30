# kaizen

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This is a developer theme for Drupal 8, 9 and 10


## Requirements

- Docker-ce

Or

- Node.js >= 22
- Yarn 1.x

Kaizen is tested on Node 22 (`node:22-alpine3.24`, the image the Skilld platforms build
with) and Node 24 (`node:24-alpine`). Node 18 and 20 are end-of-life and are no longer
supported: on Node 18 the generated theme's dependency tree already refuses to install.
The packages declare `engines: { node: ">=22" }`, which Yarn 1 enforces as a hard error.


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
- Several basic helpers which improves quality and perception of the web-sites. [Read more](https://github.com/skilld-labs/kaizen/tree/master/packages/kaizen-core)

## Usage

1. `cd web/themes/custom`
2. `npx @skilld/kaizen-tg` and follow instructions. Or alternative installation using Docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:22-alpine3.24 npx @skilld/kaizen-tg` (pin the image — `node:lts-alpine` floats to whatever the current LTS is, which kaizen has not been tested against)
3. `cd [theme_name]`
4. `yarn && yarn build` or `make install && make build` if you want to use docker instead of local


## Components creation

Run `yarn cc` from theme dir

## Storybook

Run `yarn storybook` from theme dir to init storybook

## Linting and fixing

Run `yarn lint-fix` from theme dir

## Known issues

- `yarn build` in a freshly generated theme exits 1 with
  `TypeError [ERR_INVALID_ARG_TYPE] ... at RawSource.size`. The compilation itself
  succeeds — everything under `dist/` is written correctly — and the crash happens
  afterwards, while webpack renders its stats table. Cause: `svg-sprite-loader@6.0.11`
  (unmaintained since 2021) leaves the extracted sprite module without a source, so
  webpack cannot measure it. Reproduced identically on Node 18.16, 22.23 and 24.20 and
  on webpack 5.70 through 5.110, so this is neither a Node nor a webpack regression.
  Newly generated themes ship a `stats: { modules: false }` workaround in
  `webpack.config.js`; add the same line to an older theme if you hit this. Themes that
  set `optimization.minimize: true` never saw the crash. The real fix — replacing
  `svg-sprite-loader` with webpack 5 asset modules — is part of the modernization work
  tracked separately.

## Contrib

Please contrib into kaizen if you have ideas or problems. We are on [github](https://github.com/skilld-labs/kaizen). Feel free to open discussion or create pull requests.

# License

This project is licensed under the MIT open source license.

