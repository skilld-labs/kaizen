/**
 * Component creation.
 */

const inquirer = require('inquirer');
const fs = require('fs');
const options = require('../kaizen-options');

const readYaml = require('./drupal-yml/read');

const sourceTemplate = `${options.buildAssets}component-source.scss`;
const implementationTemplate = `${
  options.buildAssets
}component-implementation.scss`;
const twigTemplate = `${options.buildAssets}component-template.twig`;

const componentQuestions = [
  {
    type: 'input',
    name: 'component_name',
    message: 'Please enter component name',
    validate: value => {
      const pass = value !== '';
      if (pass) {
        return true;
      }
      return 'Please enter something!';
    },
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
    message: 'Create elements instead default COMPONENT__content?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'createLibrary',
    message:
      '(QUESTION PLACEHOLDER. NOT WORKING YET)Create record in *.libraries.yml?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'createTemplate',
    message: 'Create twig template?',
    default: false,
  },
];

const elementQuestions = [
  {
    type: 'input',
    name: 'elements',
    message: 'Enter element name',
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another element (just hit enter for YES)?',
    default: true,
  },
];

function createComponent(component, elements = ['content']) {
  const {
    component_type: type = 'Atom',
    component_name: name = 'name',
    createTemplate: twig = false,
  } = component;

  const typePlural = `${type.toLowerCase()}s`; // Atom -> atoms
  const typeIndex = type.charAt(0).toLowerCase(); // Atom -> a
  const sourceName = `${typeIndex}-${name}`; // a-COMPONENT_NAME
  const dirName = `components/${typePlural}/${name}/`; // components/atoms/COMPONENT_NAME/

  const sourceTarget = `${options.theme.sass}${dirName}${sourceName}.scss`;
  const implementationTarget = `${options.theme.sass}${dirName}${name}.scss`;
  const replaceInSass = {
    COMPONENT_NAME: name,
    COMPONENT_TYPE: typePlural,
    COMPONENT: sourceName,
  };

  let regions = '';
  Array.prototype.forEach.call(elements, element => {
    regions = `${regions}  ${generateElementsForTwig(sourceName, element)}\n`;
  });

  const templateTarget = `${options.theme.sass}${dirName}${sourceName}.twig`;
  const replaceInTwig = {
    COMPONENT: sourceName,
    REGIONS: regions
  };

  fs.mkdir(
    `${options.theme.sass}${dirName}`,
    {
      recursive: true,
    },
    err => {
      if (err) {
        throw err;
      }
      readReplaceAndSave(sourceTemplate, replaceInSass, sourceTarget);
      readReplaceAndSave(
        implementationTemplate,
        replaceInSass,
        implementationTarget,
      );
      if (twig) {
        readReplaceAndSave(twigTemplate, replaceInTwig, templateTarget);
      }
    },
  );
}

function generateElementsForTwig(component, element) {
  const machineName = element.toLowerCase();
  const bemClass = `${component.toLowerCase()}__${machineName}`;
  return `<div class"${bemClass}">{{ content.${machineName} }}</div>`;
}

function readReplaceAndSave(filePath, replaceItems, fileDest) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    for (const replaceItem in replaceItems) {
      const re = new RegExp(replaceItem, 'g');
      data = data.replace(re, replaceItems[replaceItem]);
    }

    fs.writeFile(fileDest, data, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
}

inquirer.prompt(componentQuestions).then(answers => {
  const elements = [];
  if (answers.createAdditionalElements) {
    var ask = () => {
      inquirer.prompt(elementQuestions).then(answersEl => {
        elements.push(answersEl.elements);
        if (answersEl.askAgain) {
          ask();
        } else {
          createComponent(answers, elements);
        }
      });
    };

    ask();
  } else {
    createComponent(answers);
  }
});
