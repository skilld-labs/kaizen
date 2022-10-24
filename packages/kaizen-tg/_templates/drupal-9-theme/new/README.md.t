---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/README.md
---
# <%= h.changeCase.sentenceCase(name) %>

This theme was generated using [kaizen-tg](https://www.npmjs.com/package/@skilld/kaizen-tg) package.

## Requirements

- Node.js
- Yarn


## Features

- Postcss
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

# Usage

### Compilation

Run `yarn build` from theme dir or `yarn build-dev` for development mode

### Components creation

Run `yarn cc` from theme dir

### Storybook

Run `yarn storybook` from theme dir

### Linting and fixing

Run `yarn lint-fix` from theme dir

## Documentation about other related kaizen's packages.
1. [kaizen-cg](https://www.npmjs.com/package/@skilld/kaizen-cg)
2. [kaizen-core](https://www.npmjs.com/package/@skilld/kaizen-core)
3. [kaizen-breakpoints](https://www.npmjs.com/package/@skilld/kaizen-breakpoints)

# License

This project is licensed under the MIT open source license.
