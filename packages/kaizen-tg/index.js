#! /usr/bin/env node
const hygen = require("hygen");
const path = require("path");

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
  },
};

hygen.runner("drupal-8-theme new", config);
