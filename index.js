#!/usr/bin/env node

const fs = require("fs");
const isImage = require("is-image");
const inquirer = require("inquirer");
const path = require("path");

const util = require("util");
const exec = util.promisify(require("child_process").exec);

const remote = "https://github.com/skilld-labs/kaizen.git";

inquirer
  .prompt([
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
    const newThemePath = path.join(__dirname, answers.themeName);
    cloneRepo(answers.themeName);
  });

function cloneRepo(themeName) {
  exec(`rm -rf ${themeName} && git clone ${remote} ${themeName}`).then(() => {
    replaceStarterkitToRoot(themeName);
  });
}

// TODO: remove it after reviews.
function replaceStarterkitToRoot(themeName) {
  exec(
    `cd ${themeName} && git filter-branch --subdirectory-filter STARTERKIT/basic && rm -rf .git`
  ).then(() => {
    replaceKaizenInFilesAndFilenames(themeName, themeName);
  });
}

function replaceKaizenInFilesAndFilenames(source, themeName) {
  let files = [];

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);

    files.forEach(file => {
      const curSource = path.join(source, file);

      if (fs.lstatSync(curSource).isDirectory()) {
        replaceKaizenInFilesAndFilenames(curSource, themeName);
      } else {
        let toRename = false;

        const newFileName = file.replace("kaizen", x => {
          toRename = x;
          return themeName;
        });

        const newFile = path.join(source, newFileName);

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

        if (toRename) {
          fs.unlink(curSource, err => {
            if (err) throw err;
          });
        }
      }
    });
  }
}
