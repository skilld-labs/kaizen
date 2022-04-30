#! /usr/bin/env node
const hygen = require("hygen");
const path = require("path");

let themeName = 'kaizenComponent';
const themeIndex = process.argv.indexOf('--theme_name');
if (themeIndex > -1) {
  themeName = process.argv[themeIndex + 1];
}

const config = {
  templates: `${__dirname}/_templates`,
  cwd: __dirname,
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {};
    return require("execa").shell(action, opts);
  },
  logger: { ...console, ok: (text) => console.log(text) },
  createPrompter: () => require("enquirer"),
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => process.cwd(),
    themeName,
  },
};

hygen.runner("component new", config);
