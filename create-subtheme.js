/**
 * @file
 * Script to clone & rename STARTERKIT kaizen.
 */

const fs = require('fs');
const isImage = require('is-image');
const inquirer = require('inquirer');
const path = require('path');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'themeName',
      message: 'Please enter theme name:',
      validate: value => {
        const pass = value !== '';
        if (pass) {
          return true;
        }
        return 'Please enter something!';
      }
    }
  ])
  .then(answers => {
    const newThemePath = path.join(path.resolve(__dirname, '..'), answers.themeName);
    copyDirectoryRecursiveSync('STARTERKIT/basic', newThemePath, answers.themeName);
  });

function copyDirectoryRecursiveSync(source, targetFolder, themeName) {
  let files = [];

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);

    files.forEach(file => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        const newDir = path.join(targetFolder, path.basename(curSource));
        copyDirectoryRecursiveSync(curSource, newDir, themeName);
      } else {
        const newFileName = file.replace('kaizen', themeName);
        const newFile = path.join(targetFolder, newFileName);

        let enc = 'utf8';
        if (isImage(curSource)) {
          enc = 'base64';
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
