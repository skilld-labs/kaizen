/**
 * @file
 * Breakpoints parser.
 *
 * Inspired by https://github.com/jenslind/drupal-breakpoints-scss/
 * Generates js and sass variables from themename.breakpoints.yml
 *
 * TODO: Put into separated npm package.
 */

// TODO: Remove it.
const options = require('../../kaizen-options');

const themeName = options.theme.name;

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

function generateMap(groups, fileContent) {
  let scssMap = '';

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

module.exports.parseToJs = fileContent => {
  const groups = getMappedGroupsList(fileContent);
  const json = generateJSON(groups, fileContent);
  return json;
};

module.exports.parseToSass = fileContent => {
  const groups = getMappedGroupsList(fileContent);
  const sassMap = generateMap(groups, fileContent);
  return sassMap;
};
