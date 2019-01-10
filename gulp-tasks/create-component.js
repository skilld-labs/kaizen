/**
 * Component creation.
 */

'use strict';

const {dest, src} = require('gulp');
const fs = require('fs');
const inquirer = require('inquirer');
const options = require('../gulp-options');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const yaml = require('js-yaml');

const layoutConfig = options.rootPath.project + options.theme.name + '.layouts.yml';

let nameQuestion = {
  type: 'input',
  name: 'componentName',
  message: 'Please enter component name'
};

let typeQuestion = {
  type: 'list',
  name: 'componentType',
  message: 'What type of component?',
  choices: ['Atom', 'Molecule', 'Organism']
};

let layoutQuestion = {
  type: 'confirm',
  name: 'createLayout',
  message: 'Create drupal layout? (optional)'
};

let regionsQuestion = {
  type: 'checkbox',
  name: 'definedRegions',
  message: 'Select regions',
  choices: [
    {
      name: 'Header'
    },
    {
      name: 'Content',
      checked: true
    },
    {
      name: 'Footer'
    },
    {
      name: 'Sidebar'
    }
  ],
  validate: function (answer) {
    if (answer.length < 1) {
      return 'You must choose at least one region.';
    }
    return true;
  }
};

function checkIfComponentNotExists() {
  // TODO: Add validation and checking existing components.
  // Now component will not overwriten if exists.
  return true;
}

function checkLayoutConfigExists() {
  try {
    return fs.existsSync(layoutConfig);
  }
  catch (error) {
    throw error;
  }
}

function creationDialog(cb) {
  inquirer.prompt([typeQuestion, nameQuestion]).then(component => {

    if (checkIfComponentNotExists) {

      inquirer.prompt(layoutQuestion).then(layout => {
        if (layout.createLayout) {
          inquirer.prompt(regionsQuestion).then(regions => {
            // TODO: Create input to add custom regions.
            copyFiles(component.componentType, component.componentName, regions.definedRegions);
            cb();
          });
        }
        else {
          copyFiles(component.componentType, component.componentName);
          cb();
        }
      });
    }
  });
}

function copyFiles(type, name, layout = false) {
  let {typePlural, sourceName, dirName} = getInfo(type, name);

  src(options.theme.gulpAssets + 'component-source.scss')
    .pipe(rename({
      dirname: dirName,
      basename: '_' + sourceName
    }))
    .pipe(replace('COMPONENT_NAME', name))
    .pipe(replace('COMPONENT_TYPE', typePlural))
    .pipe(replace('COMPONENT', sourceName))
    .pipe(dest(options.theme.sass, {overwrite: false}));

  src(options.theme.gulpAssets + 'component-implementation.scss')
    .pipe(rename({
      dirname: dirName,
      basename: name
    }))
    .pipe(replace('COMPONENT', sourceName))
    .pipe(dest(options.theme.sass, {overwrite: false}));

  if (layout) {
    createLayout(name, layout, dirName);
  }
}

function createLayout(name, regions, dirName) {
  let layouts;
  let layout = generateLayout(name, regions, dirName);
  if (checkLayoutConfigExists()) {
    layouts = yaml.safeLoad(fs.readFileSync(layoutConfig));
  }
  else {
    layouts = {};
  }

  if (Object.prototype.hasOwnProperty.call(layouts, name)) {
    console.log('Layout ' + name + ' already defined in ' + layoutConfig);
    return;
  }
  else {
    layouts[name] = layout;
  }

  try {
    fs.writeFileSync(layoutConfig, yaml.dump(layouts));
  }
  catch (error) {
    throw error;
  }

  let regionsTwig = '';
  regions.forEach(region => {
    let machineName = region.toLowerCase();
    let bemClass = name.toLowerCase() + '__' + machineName;
    // TODO: Manage spaces here
    regionsTwig += '<div class"' + bemClass + '">{{ content.' + machineName + '}}</div>';
  });

  src(options.theme.gulpAssets + 'layout-template.html.twig')
    .pipe(rename({
      dirname: dirName,
      basename: name
    }))
    .pipe(replace('LAYOUT_NAME', name))
    .pipe(replace('REGIONS', regionsTwig))
    .pipe(dest(options.theme.sass, {overwrite: false}));
}

function generateLayout(name, regions, dirName) {
  let layout = {
    label: name,
    category: options.theme.name,
    regions: {},
    template: dirName + name + '.html.twig'
  };
  regions.forEach(region => {
    layout.regions[region.toLowerCase()] = {
      label: region
    };
  });
  return layout;
}

function getInfo(type, name) {
  let typePlural = type.toLowerCase() + 's'; // Atom -> atoms
  let typeIndex = type.charAt(0).toLowerCase(); // Atom -> a
  let sourceName = typeIndex + '-' + name; // a-COMPONENT_NAME
  let dirName = 'components/' + typePlural + '/' + name; // components/atoms/COMPONENT_NAME

  return {
    typePlural: typePlural,
    sourceName: sourceName,
    dirName: dirName
  };
}

exports.createComponent = creationDialog;
