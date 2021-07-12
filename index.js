#!/usr/bin/env node

const fs = require("fs");
const isImage = require("is-image");
const inquirer = require("inquirer");
const path = require("path");
const exec = require('child_process').exec;
const commandLineArgs = require('command-line-args');

const options = commandLineArgs([
  { name: 'theme_type', type: String },
  { name: 'theme_name', type: String },
])

let themeType = options.theme_type || null;
let themeName = options.theme_name || null;
let errorsDuringThemeType = false;
let errorsDuringThemeName = false;
let prompt = [];

const checkThemeName = (value) => {
  const notEmpty = value !== "";
  if (notEmpty) {
    return true;
  }
  return "Please enter something!";
};

const promtsPushType = (message) => {
  prompt.push({
    type: 'list',
    name: 'themeType',
    message: message,
    choices: ['basic', 'primary'],
  });
}

const promtsPushName = () => {
  prompt.push( {
    type: 'input',
    name: 'themeName',
    message: 'Please enter theme name:',
    validate: value => checkThemeName(value),
  });
}

const replaceKaizenInFilesAndFilenames = (source, newThemePath, themeName) => {
  let files = [];

  if (!fs.existsSync(newThemePath)) {
    fs.mkdirSync(newThemePath);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);

    files.forEach(file => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        const newDir = path.join(newThemePath, path.basename(curSource));
        replaceKaizenInFilesAndFilenames(curSource, newDir, themeName);
      } else {
        const newFileName = file.replace("kaizen", themeName);
        const newFile = path.join(newThemePath, newFileName);

        let enc = "utf8";
        if (isImage(curSource)) {
          enc = "base64";
        }

        fs.readFile(curSource, enc, (err, data) => {
          if (err) {
            throw err;
          }

          const fileTextReplaceTempoBreakpoints = data.replace(/kaizen-breakpoints/gi, 'temporaryValBreakpoints');
          const fileTextReplaceTempoSvg = fileTextReplaceTempoBreakpoints.replace(/kaizen-svg-sprite/gi, 'temporaryValSvgSprite');
          const fileTextReplaceTempo = fileTextReplaceTempoSvg.replace(/kaizen/gi, themeName);
          const fileTextReplaceRevertBreakpoints = fileTextReplaceTempo.replace(/temporaryValBreakpoints/gi, 'kaizen-breakpoints');
          const fileTextReplace = fileTextReplaceRevertBreakpoints.replace(/temporaryValSvgSprite/gi, 'kaizen-svg-sprite');
          fs.writeFile(newFile, fileTextReplace, enc, error => {
            if (error) {
              throw error;
            }
          });
        });
      }
    });
  }
}

const createTheme = (name, type) => {
  const newThemePath = process.cwd() + "/" + name + "/";
  replaceKaizenInFilesAndFilenames(
    path.join(__dirname, "/starterkits/basic"),
    newThemePath,
    name
  );
  if (type === 'primary') {
    replaceKaizenInFilesAndFilenames(
      path.join(__dirname, "/starterkits/primary"),
      newThemePath,
      name
    );
  }
};

if (!themeType) {
  promtsPushType('What type of theme?');
  errorsDuringThemeType = true;
}

if (!errorsDuringThemeType && themeType && !['basic', 'primary'].includes(themeType)) {
  promtsPushType('Wrong theme type, please choose one of the following types?');
  errorsDuringThemeType = true;
}

if (!themeName) {
  promtsPushName();
  errorsDuringThemeName = true;
}

if (!errorsDuringThemeName && themeName && !checkThemeName(themeName)) {
  promtsPushName();
  errorsDuringThemeName = true;
}

if (errorsDuringThemeType || errorsDuringThemeName) {
  inquirer
    .prompt(prompt)
    .then(answers => createTheme(answers.themeName ? answers.themeName : themeName, answers.themeType ? answers.themeType : themeType))
    .catch(err => console.log(`.catch ${err}`));
}
else {
  createTheme(themeName, themeType);
}
