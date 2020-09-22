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
    "@skilld/kaizen-cg": "^1.0.2",
    "@storybook/addon-docs": "^6.0.18",
    "@storybook/addon-essentials": "^6.0.18",
    "@storybook/html": "^6.0.18",
    "browser-sync": "^2.26.3",
    "drupal-attribute": "^1.0.2",
    "inquirer": "^7.0.3",
    "raw-loader": "^4.0.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "twig": "^1.13.3",
    "twig-drupal-filters": "^3.0.0",
    "twig-loader": "^0.5.1"
  },
  "dependencies": {
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.2",
    "@skilld/kaizen-breakpoints": "^1.0.0",
    "@skilld/kaizen-core": "^1.0.3",
<% if(type==='primary'){ -%>
    "@skilld/kaizen-primary": "^1.0.1",
<% } -%>
    "@skilld/kaizen-svg-sprite": "^1.0.0",
    "autoprefixer": "^9.5.0",
    "babel-loader": "^8.0.4",
    "cross-env": "^7.0.0",
    "css-loader": "^4.2.2",
    "css-vars-ponyfill": "^2.0.2",
    "eslint": "^7.7.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.9.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-react": "^7.12.4",
    "extract-loader": "^5.1.0",
    "file-loader": "^6.0.0",
    "glob": "^7.1.3",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^7.1.0",
    "postcss-discard-empty": "^4.0.1",
    "postcss-extend": "^1.0.5",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-nested": "^4.1.2",
    "prettier": "^2.1.0",
    "stylelint": "^13.2.0",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-order": "^4.0.0",
    "svg-sprite-loader": "^5.0.0",
    "terser-webpack-plugin": "^4.1.0",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.3.0"
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
