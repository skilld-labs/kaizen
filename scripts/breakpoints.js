/**
 * @file
 * Breakpoints parser.
 *
 * Inspired by https://github.com/jenslind/drupal-breakpoints-scss/
 * Generates sass variables for sass.
 *
 * TODO: Put into separated npm package.
 */

const fs = require('fs');
const options = require('../kaizen-options');

const themeName = options.theme.name;
const WARNING = 'THIS IS GENERATED FILE. PLEASE EDIT THEMENAME.breakpoints.yml';
const jsFile = '.bp.json';
const sassFile = '_bp.scss';

const readYaml = require('./drupal-yml/read');

/**
 * Validate breakpoint multipliers
 *
 * @param {*} multipliers
 *
 * @returns updated list of multipliers
 */

function checkMultipliers(multipliers) {
  if (typeof multipliers === 'undefined') {
    multipliers = ['1x'];
  } else if (!multipliers.includes('1x')) {
    multipliers.unshift('1x');
  }
  return multipliers;
}

/**
 * Generate sass map with breakpoints.
 *
 * @param {*} groups - Breakpoints groups list mapped with their queries.
 * @param {*} fileContent - parsed Drupal breakpoints.yml
 *
 * @returns Sass Map with drupal breakpoints.
 */

function generateMap(groups, fileContent) {
  let scssMap = '';

  scssMap += `// ${WARNING}\n`;

  scssMap += '$breakpoints-groups: (\n';

  groups.forEach((breakpoints, group) => {
    scssMap += `  ${group.replace('.', '_')}: (\n`;
    breakpoints.forEach(bp => {
      const breakpoint = fileContent[bp];
      const multipliers = checkMultipliers(breakpoint.multipliers);
      const breakpointLabel = breakpoint.label
        .replace(/\s+/g, '_')
        .toLowerCase();

      multipliers.forEach(mp => {
        const multiplier = mp ? `_${mp}` : '';
        scssMap += `    ${breakpointLabel}${multiplier}: '${generateQuery(
          breakpoint,
          mp === '1x' ? null : mp,
        )}',\n`;
      });
    });
    scssMap += '  ),\n';
  });
  scssMap += ');\n';

  return scssMap;
}

function generateJSON(groups, fileContent) {
  const output = {};
  groups.forEach((breakpoints, group) => {
    group = group.replace('.', '_');
    output[group] = {};
    breakpoints.forEach(bp => {
      const breakpoint = fileContent[bp];
      const multipliers = checkMultipliers(breakpoint.multipliers);
      const breakpointLabel = breakpoint.label
        .replace(/\s+/g, '_')
        .toLowerCase();

      multipliers.forEach(mp => {
        const multiplier = mp ? `_${mp}` : '';
        output[group][breakpointLabel + multiplier] = generateQuery(
          breakpoint,
          mp === '1x' ? null : mp,
        );
      });
    });
  });
  return JSON.stringify(output);
}

/**
 * Generate query.
 *
 * @param {*} breakpoint - Media query.
 * @param {*} multiplier - Optional Multiplier.
 *
 * @returns
 */

function generateQuery(breakpoint, multiplier) {
  const resQuery = multiplier ? xToResolution(multiplier) : '';
  return breakpoint.mediaQuery + resQuery;
}

/**
 * Generate groups list with mapped queries.
 *
 * @param {*} fileContent - parsed Drupal breakpoints.yml
 *
 * @returns
 */

function getMappedGroupsList(fileContent) {
  const items = Object.keys(fileContent);
  const allGroups = items.map(item => {
    if (typeof fileContent[item].group === 'undefined') {
      return themeName;
    }

    return fileContent[item].group;
  });
  const uniqueGroups = [...new Set(allGroups)];

  const groups = new Map();

  uniqueGroups.forEach(group => {
    let queriesByGroup;
    if (group === themeName) {
      queriesByGroup = items.filter(item => {
        return (
          typeof fileContent[item].group === 'undefined' ||
          fileContent[item].group === themeName
        );
      });
    } else {
      queriesByGroup = items.filter(item => fileContent[item].group === group);
    }

    groups.set(group, queriesByGroup);
  });

  return groups;
}

function xToResolution(mp) {
  return ` and (min-resolution: ${parseInt(mp)}dppx)`;
}

function writeJs(json) {
  fs.writeFileSync(options.theme.js + jsFile, json, err => {
    if (err) {
      throw err;
    }
  });
}

function writeSass(sassMap) {
  fs.writeFileSync(options.theme.sass + sassFile, sassMap, err => {
    if (err) {
      throw err;
    }
  });
}

const fileContent = readYaml(
  `${options.rootPath.project + themeName}.breakpoints.yml`,
);
const groups = getMappedGroupsList(fileContent);
const sassMap = generateMap(groups, fileContent);
const json = generateJSON(groups, fileContent);

writeSass(sassMap);
writeJs(json);
