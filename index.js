#!/usr/bin/env node

const fs = require("fs");
const isImage = require("is-image");
const inquirer = require("inquirer");
const path = require("path");

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
        const pass = value !== "";
        if (pass) {
          return true;
        }
        return "Please enter something!";
      }
    }
  ])
  .then(answers => {
    const newThemePath = process.cwd() + "/" + answers.themeName + "/";
    replaceKaizenInFilesAndFilenames(
      path.join(__dirname, "/STARTERKIT/basic"),
      newThemePath,
      answers.themeName
    );
    if (answers.themeType === 'primary') {
      replaceKaizenInFilesAndFilenames(
        path.join(__dirname, "/STARTERKIT/primary"),
        newThemePath,
        answers.themeName
      );
    }
  });

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
