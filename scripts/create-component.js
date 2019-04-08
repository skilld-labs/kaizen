/**
 * Component creation.
 */

const inquirer = require('inquirer');
const fs = require('fs');
const options = require('../kaizen-options');

const sourceTemplate = `${options.buildAssets}component-source.scss`;
const implementationTemplate = `${options.buildAssets}component-implementation.scss`;


const componentQuestions = [
  {
    type: 'input',
    name: 'component_name',
    message: 'Please enter component name',
    validate: (value) => {
      let pass = (value !== '')
      if (pass) {
        return true;
      }
      return 'Please enter something!';
    }
  },
  {
    type: 'list',
    name: 'component_type',
    message: 'What type of component?',
    choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Helper'],
  },
  {
    type: 'confirm',
    name: 'createAdditionalElements',
    message: '(QUESTION PLACEHOLDER. NOT WORKING YET)Create additional elements except default COMPONENT__content?',
    default: false
  },
  {
    type: 'confirm',
    name: 'createLibrary',
    message: '(QUESTION PLACEHOLDER. NOT WORKING YET)Create record in *.libraries.yml?',
    default: false
  },
  {
    type: 'confirm',
    name: 'createTemplate',
    message: '(QUESTION PLACEHOLDER. NOT WORKING YET)Create twig template?',
    default: false
  }
];

const elementQuestions = [
  {
    type: 'input',
    name: 'elements',
    message: "Enter element name?"
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another element (just hit enter for YES)?',
    default: true
  }
];

function createComponent(component, elements = false) {
  const {
    component_type: type = 'Atom',
    component_name: name = 'name',
  } = component;

  const typePlural = `${type.toLowerCase()}s`; // Atom -> atoms
  const typeIndex = type.charAt(0).toLowerCase(); // Atom -> a
  const sourceName = `${typeIndex}-${name}`; // a-COMPONENT_NAME
  const dirName = `components/${typePlural}/${name}/`; // components/atoms/COMPONENT_NAME/

  const sourceTarget = `${options.theme.sass}${dirName}${sourceName}.scss`;
  const implementationTarget = `${options.theme.sass}${dirName}${name}.scss`;
  const replaceInSass = {
    'COMPONENT_NAME': name,
    'COMPONENT_TYPE': typePlural,
    'COMPONENT': sourceName
  };

  fs.mkdir(`${options.theme.sass}${dirName}`, {
    recursive: true
  }, (err) => {
    if (err) throw err;
    readReplaceAndSave(sourceTemplate, replaceInSass, sourceTarget);
    readReplaceAndSave(implementationTemplate, replaceInSass, implementationTarget);
  });
}

function readReplaceAndSave(filePath, replaceItems, fileDest) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    for (let replaceItem in replaceItems) {
      let re = new RegExp(replaceItem, 'g');
      data = data.replace(re, replaceItems[replaceItem]);
    }

    fs.writeFile(fileDest, data, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      };
    });
  });
}

inquirer.prompt(componentQuestions).then(answers => {
  createComponent(answers);
});
