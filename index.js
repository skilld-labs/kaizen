#!/usr/bin/env node

const fs = require("fs");
const isImage = require("is-image");
const inquirer = require("inquirer");
const path = require("path");
const exec = require('child_process').exec;

inquirer
  .prompt([
    {
      type: 'list',
      name: 'themeType',
      message: 'What type of theme?',
      choices: ['basic', 'primary'],
    },
    {
      type: "input",
      name: "themeName",
      message: "Please enter theme name:",
      validate: value => {

        const notEmpty = value !== "";
        if (notEmpty) {
          return new Promise((resolve, reject) => {
            exec(`yarn info @${value}/components`, (err, stdout, stderr) => {
              if (stderr) {
                resolve(true);
              }
              if (stdout) {
                resolve(`Your name has collision with @${value}/components in npm`);
              }
            });
          });
        }
        return "Please enter something!";
      }
    }
  ])
  .then(answers => {
    const newThemePath = process.cwd() + "/" + answers.themeName + "/";
    replaceKaizenInFilesAndFilenames(
      path.join(__dirname, "/starterkits/basic"),
      newThemePath,
      answers.themeName
    );
    if (answers.themeType === 'primary') {
      replaceKaizenInFilesAndFilenames(
        path.join(__dirname, "/starterkits/primary"),
        newThemePath,
        answers.themeName
      );
    }
  }).catch((err) => console.log(`.catch ${err}`))

function replaceKaizenInFilesAndFilenames(source, newThemePath, themeName) {
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

          const fileTextReplace = data.replace(/kaizen/gi, themeName);
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
