/**
 * @file
 * Script to clone & rename STARTERKIT kaizen.
 */

const fs = require('fs');
const fse = require('fs-extra');
const isImage = require('is-image');
const inquirer = require('inquirer');
const glob = require('glob');
const sourceDirs = ['STARTERKIT/*', 'STARTERKIT/*/**'];

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
    createTheme(answers.themeName);
  });

function createTheme (themeName) {
  for (const sourceDir in sourceDirs) {
    glob(sourceDirs[sourceDir], ({ dot: true }), (err, files) => {
      if (err) {
        return console.log(err);
      }

      for (const file in files) {
        if (fs.statSync(files[file]).isFile()) {
          let enc = 'utf8';
          if (isImage(files[file])) {
            enc = 'base64';
          }
          fs.readFile(files[file], enc, (err, data) => {
            if (err) {
              return console.log(err);
            }

            const fileNamePath = files[file];
            const fileNamePathReplaced = fileNamePath.replace('STARTERKIT', themeName).replace('kaizen', themeName);
            const fileTextReplace = data.replace(/kaizen/gi, themeName);

            fse.outputFile('./' + fileNamePathReplaced, fileTextReplace, enc, (err) => {
              if (err) {
                return console.log(err);
              }
            });
          });
        }
      }
    });
  }
}
