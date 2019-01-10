/**
 * Component creation.
 */

'use strict';

const {dest, src} = require('gulp');
const inquirer = require('inquirer');
const options = require('../gulp-options');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

let nameQuestion = {
  type: 'input',
  name: 'component_name',
  message: 'Please enter component name'
};

let typeQuestion = {
  type: 'list',
  name: 'component_type',
  message: 'What type of component?',
  choices: ['Atom', 'Molecule', 'Organism']
};

function checkIfComponentNotExists() {
  // TODO: Add validation and checking existing components.
  // Now component will not overwriten if exists.
  return true;
}

function creationDialog(cb) {
  inquirer.prompt(typeQuestion).then(type => {

    inquirer.prompt(nameQuestion).then(name => {

      if (checkIfComponentNotExists) {
        copyFiles(type, name);
        cb();
      }
    });
  });
}

function copyFiles(type, name) {
  let typePlural = type.component_type.toLowerCase() + 's'; // Atom -> atoms
  let typeIndex = type.component_type.charAt(0).toLowerCase(); // Atom -> a
  let sourceName = typeIndex + '-' + name.component_name; // a-COMPONENT_NAME
  let dirName = 'components/' + typePlural + '/' + name.component_name; // components/atoms/COMPONENT_NAME

  src(options.theme.gulpAssets + 'component-source.scss')
    .pipe(rename({
      dirname: dirName,
      basename: '_' + sourceName
    }))
    .pipe(replace('COMPONENT_NAME', name.component_name))
    .pipe(replace('COMPONENT_TYPE', typePlural))
    .pipe(replace('COMPONENT', sourceName))
    .pipe(dest(options.theme.sass, {overwrite: false}));

  src(options.theme.gulpAssets + 'component-implementation.scss')
    .pipe(rename({
      dirname: dirName,
      basename: name.component_name
    }))
    .pipe(replace('COMPONENT', sourceName))
    .pipe(dest(options.theme.sass, {overwrite: false}));
}

exports.createComponent = creationDialog;