import './_variables.css';
import './map_external.css';
import './map.css';
import casual from 'casual-browserify';
import componentNotes from './o-map.md';
import map from './o-map.js';
import { useEffect } from '@storybook/client-api';
import mapPoint from './image/map-point.svg';

const template = require('./o-map.html.twig');
const data = require('./o-map.json');

// Uncomment next 2 lines if your templates contains {{ attibutes.addClass(...) }} or similar logic.
// import drupalAttribute from 'drupal-attribute';
// data.attributes = new drupalAttribute();

data.svgSpritePath = window.svgSpritePath;

const component = {
  title: 'organisms/map',
};

if (componentNotes.length) {
  component.parameters = { notes: componentNotes };
}

export default component;

const filters = [
  {
    id: 'sales_representative',
    label: 'Show Sales Reps',
    icon: mapPoint,
    color: '#C52254',
    weight: '1',
  },
  {
    id: 'location',
    label: 'Show Locations',
    icon: mapPoint,
    color: '#0E4E95',
    weight: '0',
  },
  {
    id: 'location_test',
    label: 'Show Locations test',
    icon: mapPoint,
    color: '#f26f21',
    weight: '2',
  },
];

const localization = {
  regions: 'Regions',
  materials: 'Materials',
  capabilities: 'Capabilities',
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getdummyItems = (number = 10) => {
  const items = [];
  for (let index = 0; index < number; index++) {
    const randomType = getRandomInt(filters.length);
    const type = filters[randomType].id;
    const regions = Math.round(Math.random())
      ? { regions: `${casual.city} ${casual.country}` }
      : {};

    // common fields.
    const item = {
      position: [casual.latitude, casual.longitude],
      type: [type],
      title: casual.company_name,
      address: casual.street,
      phone_number: casual.phone,
      email: casual.email,
      iso: casual.zip(5),
      capabilities: casual.words(4),
      materials: casual.words(6),
      uuid: casual.uuid,
      ...regions,
    };
    items.push(item);
  }
  return items;
};

const dummyData = () => getdummyItems(30);

export const basic = () => {
  useEffect(() => {
    map({
      layersContent: dummyData(),
      filters,
      localization,
      svgSpritePath: data.svgSpritePath,
    });
  }, []);
  return template({
    ...data,
    filters,
  });
};

export const grouped = () => {
  useEffect(() => {
    map({
      layersContent: dummyData(),
      filters,
      localization,
      svgSpritePath: data.svgSpritePath,
    });
  }, []);
  return template({
    ...data,
    filters,
    modifier_class: 'o-map-grouped',
  });
};
