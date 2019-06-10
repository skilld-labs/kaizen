/**
 * Component creation.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const options = require('../kaizen-options');

const sourceTemplate = `${options.buildAssets}component-source.css`;
const implementationTemplate = `${options.buildAssets}component-implementation.css`;
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

function generateElementsForTwig(component, element) {
  const machineName = element.toLowerCase();
  const bemClass = `${component.toLowerCase()}__${machineName}`;
  return `<div class"${bemClass}">{{ content.${machineName} }}</div>`;
}

function readReplaceAndSave(filePath, replaceItems, fileDest) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    for (const replaceItem in replaceItems) {
      const re = new RegExp(replaceItem, 'g');
      data = data.replace(re, replaceItems[replaceItem]);
    }

    fs.writeFile(fileDest, data, 'utf8', error => {
      if (error) {
        throw error;
      }
    });
  });
}

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

  const sourceTarget = `${options.theme.css}${dirName}_${sourceName}.css`;
  const implementationTarget = `${options.theme.css}${dirName}${name}.css`;
  const replaceInCss = {
    COMPONENT_NAME: name,
    COMPONENT_TYPE: typePlural,
    COMPONENT: sourceName,
  };

  let regions = '';
  Array.prototype.forEach.call(elements, element => {
    regions = `${regions}  ${generateElementsForTwig(sourceName, element)}\n`;
  });

  const templateTarget = `${options.theme.css}${dirName}${sourceName}.twig`;
  const replaceInTwig = {
    COMPONENT: sourceName,
    REGIONS: regions,
  };

  fs.mkdir(
    `${options.theme.css}${dirName}`,
    {
      recursive: true,
    },
    err => {
      if (err) {
        throw err;
      }
      readReplaceAndSave(sourceTemplate, replaceInCss, sourceTarget);
      readReplaceAndSave(
        implementationTemplate,
        replaceInCss,
        implementationTarget,
      );
      if (twig) {
        readReplaceAndSave(twigTemplate, replaceInTwig, templateTarget);
      }
    },
  );
}

inquirer.prompt(componentQuestions).then(answers => {
  const elements = [];
  if (answers.createAdditionalElements) {
    const ask = () => {
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
