---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/package.json
---
{
  "name": "<%= h.changeCase.lower(name) %>-theme",
  "version": "1.0.0",
  "description": "Basic theme",
  "repository": "git@github.com:skilld-labs/kaizen.git",
  "author": "Skilld",
  "license": "MIT",
  "devDependencies": {
    "@skilld/kaizen-cg": "^2.0.0-beta.0",
    "@storybook/addon-essentials": "^6.4.19",
    "@storybook/addon-postcss": "^2.0.0",
    "@storybook/builder-webpack5": "^6.4.19",
    "@storybook/html": "^6.4.19",
    "@storybook/manager-webpack5": "^6.4.19",
    "clean-webpack-plugin": "^4.0.0",
    "browser-sync": "^2.27.9",
    "drupal-attribute": "^1.0.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "twig": "^1.15.4",
    "twig-drupal-filters": "^3.1.2",
    "twig-loader": "^0.5.5"
  },
  "dependencies": {
    "@<%= h.changeCase.lower(name) %>/components": "^1.0.0",
    "@skilld/kaizen-breakpoints": "^2.0.0-beta.0",
    "@skilld/kaizen-core": "^2.0.0-beta.0",
    "autoprefixer": "^10.4.4",
    "copy-webpack-plugin": "^11.0.0",
    "cross-env": "^7.0.3",
    "css-loader": "^6.7.1",
    "eslint": "^8.9.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-yml": "^0.14.0",
    "extract-loader": "^5.1.0",
    "file-loader": "^6.2.0",
    "glob": "^7.2.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.12",
    "postcss-cli": "^9.1.0",
    "postcss-discard-empty": "^5.1.1",
    "postcss-extend-rule": "^4.0.0",
    "postcss-import": "^14.1.0",
    "postcss-loader": "^6.2.1",
    "postcss-nested": "^5.0.6",
    "postcss-pxtorem": "^6.0.0",
    "postcss-url": "^10.1.3",
    "prettier": "^2.6.1",
    "stylelint": "^14.6.0",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-order": "^5.0.0",
    "svg-sprite-loader": "^6.0.11",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2"
  },
  "scripts": {
    "build": "cross-env ./node_modules/.bin/webpack",
    "build-dev": "cross-env NODE_ENV=development ./node_modules/.bin/webpack",
    "lint": "cross-env ./node_modules/.bin/run-p lint:*",
    "lint-fix": "cross-env ./node_modules/.bin/run-p \"lint:* --fix\"",
    "lint:js": "node ./node_modules/eslint/bin/eslint.js .",
    "lint:css": "cross-env ./node_modules/.bin/stylelint \"**/*.css\"",
    "lint:yaml": "node ./node_modules/eslint/bin/eslint.js --ext .yml .",
    "browsersync": "yarn run browser-sync start --proxy '127.0.0.1:8888' --files ./dist",
    "watch": "cross-env ./node_modules/.bin/webpack -w",
    "watch:bs": "cross-env NODE_ENV=development ./node_modules/.bin/run-p browsersync watch",
    "cc": "npx @skilld/kaizen-cg --theme_name=<%= h.changeCase.snakeCase(name) %>",
    "storybook": "start-storybook",
    "build-storybook": "build-storybook -c .storybook -o dist/storybook"
  },
  "private": true,
  "workspaces": [
    "components"
  ]
}
