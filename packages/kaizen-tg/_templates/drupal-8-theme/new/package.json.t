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
    "@skilld/kaizen-cg": "^1.0.4",
    "@storybook/addon-docs": "^6.2.9",
    "@storybook/addon-essentials": "^6.2.9",
    "@storybook/addon-knobs": "^6.2.9",
    "@storybook/addon-postcss": "^2.0.0",
    "@storybook/html": "^6.2.9",
    "browser-sync": "^2.26.14",
    "drupal-attribute": "^1.0.2",
    "inquirer": "^7.0.3",
    "raw-loader": "^4.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "twig": "^1.15.4",
    "twig-drupal-filters": "^3.1.2",
    "twig-loader": "^0.5.5"
  },
  "dependencies": {
    "@skilld/kaizen-breakpoints": "^1.0.0",
    "@skilld/kaizen-core": "^1.0.3",
<% if(type==='primary'){ -%>
    "@skilld/kaizen-primary": "^1.0.1",
<% } -%>
    "@skilld/kaizen-svg-sprite": "^1.0.0",
    "autoprefixer": "^10.2.6",
    "cross-env": "^7.0.3",
    "css-loader": "^5.2.6",
    "eslint": "^7.29.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.24.0",
    "extract-loader": "^5.1.0",
    "file-loader": "^6.2.0",
    "glob": "^7.1.7",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.3.5",
    "postcss-cli": "^8.3.1",
    "postcss-discard-empty": "^5.0.1",
    "postcss-extend": "^1.0.5",
    "postcss-import": "^14.0.2",
    "postcss-loader": "^4",
    "postcss-nested": "^4.1.2",
    "postcss-preset-env": "^6.7.0",
    "postcss-pxtorem": "^6.0.0",
    "prettier": "^2.3.1",
    "stylelint": "^13.13.1",
    "stylelint-config-standard": "^22.0.0",
    "stylelint-order": "^4.1.0",
    "svg-sprite-loader": "^6.0.8",
    "terser-webpack-plugin": "^5.1.3",
    "webpack": "^5.40.0",
    "webpack-cli": "^4.7.2"
  },
  "scripts": {
    "build": "cross-env ./node_modules/.bin/webpack",
    "lint": "cross-env ./node_modules/.bin/run-p lint:*",
    "lint-fix": "cross-env ./node_modules/.bin/run-p \"lint:* --fix\"",
    "lint:js": "node ./node_modules/eslint/bin/eslint.js .",
    "lint:css": "cross-env ./node_modules/.bin/stylelint \"**/*.css\"",
    "browsersync": "yarn run browser-sync start --proxy '127.0.0.1:8888' --files ./dist",
    "watch": "cross-env ./node_modules/.bin/webpack -w",
    "watch:bs": "cross-env NODE_ENV=development ./node_modules/.bin/run-p browsersync watch",
    "cc": "npx @skilld/kaizen-cg",
    "storybook": "start-storybook",
    "build-storybook": "build-storybook -c .storybook -o dist/storybook"
  },
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
