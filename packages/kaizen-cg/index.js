#! /usr/bin/env node
const hygen = require("hygen");
const path = require("path");

const cliArgs = process.argv.slice(2);
const themeName = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';

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
