import L from 'leaflet';
import 'leaflet.markercluster';
import Autocomplete from '@tomik23/autocomplete/dist/js/autocomplete.esm.min';

const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default ({
  className = 'o-map',
  svgSpritePath = '',
  context = document,
  mapOptions = {},
  layersContent = [],
  filters = [],
  mapGoupedPointsClass = 'o-map-grouped',
  themeFile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
} = {}) => {
  const defaultMapOptions = {
    layers: [
      new L.TileLayer(themeFile, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    center: [50, 0],
    zoom: 2,
    zoomControl: false,
    scrollWheelZoom: false,
  };

  // Item add additional info normalize
  // - primary color
  // - position Array if empty
  // - custom primary icon
  layersContent.forEach((item) => {
    const type = item.type && item.type.length ? item.type[0] : '';
    const filterCurrent = filters.find(({ id: filterId }) => filterId === type);

    item.color = filterCurrent ? filterCurrent.color : '#29b9e8';
    item.icon = filterCurrent && filterCurrent.icon ? filterCurrent.icon : '';
    if (!item.position) {
      item.position = [item.lat, item.lon];
    }
  });

  const updatedFilterSelected = ({ filtersList = [] }) => {
    const filterSelectedList = [];
    filtersList.forEach((input) => {
      if (input.checked) {
        filterSelectedList.push(input.value);
      }
    });

    return filterSelectedList;
  };
  const filteredList = ({ fulList, filterSelectedList }) => {
    return fulList.filter((item) =>
      item.type.some((r) => filterSelectedList.includes(r)),
    );
  };

  function getPosition(showPositionFunc) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPositionFunc);
    }
  }

  Array.prototype.forEach.call(
    context.querySelectorAll(`.${className}:not(.map-processed)`),
    (el) => {
      let currentUserPosition = null;
      const focusOnUserLocation = el.classList.contains('focus-user-location');

      const searchDistance =
        el.getAttribute('data-search-distance-limit-km') || 100;
      const filtersList = el.querySelectorAll(
        '.o-map__filter-container .o-map__filter-input',
      );
      const searchInput = el.querySelector('.o-map__search-input');
      const afterSearchZoom = 8;

      const activeMarkerClass = 'o-map__marker--active';

      const mapConditions = {
        isMapFocused: false,
        isSearchActive: false,
        markerActive: null,
      };

      const mapWrapper = el.querySelector('.o-map__map');
      const map = new L.Map(mapWrapper, {
        ...defaultMapOptions,
        ...mapOptions,
      });
      // add zoom control
      L.control
        .zoom({
          position: 'bottomright',
        })
        .addTo(map);
      L.control.scale({ metric: true, imperial: false }).addTo(map);

      map.setZoom(mapOptions.zoom || defaultMapOptions.zoom);
      map.once('focus', () => {
        map.scrollWheelZoom.enable();
        mapConditions.isMapFocused = true;
      });

      const deactivateMarker = (markerObj) => {
        if (markerObj && markerObj._icon && markerObj._icon.classList) {
          markerObj._icon.classList.remove(activeMarkerClass);
          markerObj.options.icon.options.className =
            markerObj.options.icon.options.className.replace(
              activeMarkerClass,
              '',
            );
        }
      };

      const activateMarker = (markerObj) => {
        if (markerObj) {
          markerObj._icon.classList.add(activeMarkerClass);
          markerObj.options.icon.options.className = `${markerObj.options.icon.options.className} ${activeMarkerClass}`;
        }
      };

      // make clusterRadius very small do not use markerCluster if disabled
      const maxClusterRadius = el.classList.contains(mapGoupedPointsClass)
        ? {}
        : { maxClusterRadius: 0 };
      // eslint-disable-next-line no-unused-vars
      const layerGroup = L.markerClusterGroup({
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: false,
        ...maxClusterRadius,
      }).addTo(map);

      const fitBounds = () => {
        const bounds = layerGroup.getBounds();
        if (bounds && bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      };

      const setCurrentPositionView = (position) => {
        const { isMapFocused, isSearchActive } = mapConditions;
        const mapActivity = isMapFocused || isSearchActive;

        if (!mapActivity) {
          const icon = L.divIcon({
            className: `o-map__marker`,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
            html: '',
          });
          const marker = L.marker(position, { icon, title: '' });

          marker.addTo(layerGroup);
          fitBounds();
        }
      };

      const setPosition = (position) => {
        currentUserPosition = {
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        };
        setCurrentPositionView(currentUserPosition);
      };

      const mapFitBoundsHandle = () => {
        fitBounds();

        if (focusOnUserLocation) {
          if (!currentUserPosition) {
            getPosition(setPosition);
          } else {
            setCurrentPositionView(currentUserPosition);
          }
        }
      };

      const addMarkers = (args = { itemsList: layersContent }) => {
        const { itemsList } = args;
        layerGroup.clearLayers();
        mapConditions.markerActive = null;

        Array.prototype.forEach.call(itemsList, (item) => {
          if (item.position === false) {
            return;
          }

          const iconHtml = item.icon
            ? `<img class="o-map__marker-icon o-map__marker-icon--custom"
                src="${item.icon}">`
            : `
              <svg class="o-map__marker-icon" fill="${item.color}">
                <use xlink:href="${svgSpritePath}#svg-map-point"></use>
              </svg>
            `;

          const icon = L.divIcon({
            className: `o-map__marker`,
            iconSize: [20, 28],
            iconAnchor: [10, 26],
            html: iconHtml,
          });
          const marker = L.marker(item.position, { icon, title: item.title });

          marker.on('click', () => {
            deactivateMarker(mapConditions.markerActive);
            mapConditions.markerActive = marker;
            activateMarker(marker);
          });

          marker.uuid = item.uuid;
          marker.addTo(layerGroup);
        });

        mapFitBoundsHandle();
      };

      const createAllContent = ({
        searchLatLng = mapConditions.searchLatLng,
      }) => {
        let layersContentNormalized = layersContent;

        if (filtersList) {
          const filterSelectedList = updatedFilterSelected({
            filtersList,
          });

          if (filterSelectedList.length) {
            layersContentNormalized = filteredList({
              fulList: layersContent,
              filterSelectedList,
            });
          }
        }

        if (searchLatLng) {
          const searchFiltered = layersContentNormalized.filter((item) => {
            const distance =
              searchLatLng.distanceTo(
                L.latLng(item.position[0], item.position[1]),
              ) / 1000;

            return Math.round(distance) <= searchDistance;
          });

          layersContentNormalized = searchFiltered;
        }

        addMarkers({ itemsList: layersContentNormalized });
      };

      //
      // Autocomplete functionality
      // start
      if (searchInput) {
        const uniqueId = `o-map-search-input-${
          Date.now() + Math.floor(Math.random() * 10000)
        }`;
        searchInput.setAttribute('id', uniqueId);

        if (el.querySelector(`#${uniqueId}`)) {
          // search Input
          // eslint-disable-next-line no-unused-vars
          const AutocompleteSearch = new Autocomplete(uniqueId, {
            // default selects the first item in
            // the list of results
            selectFirst: true,

            // The number of characters entered should start searching
            howManyCharacters: 2,

            // onSearch
            onSearch: ({ currentValue }) => {
              // You can add this to parameter for language prefer
              // &accept-language=en
              const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=10&q=${encodeURI(
                currentValue,
              )}`;

              return new Promise((resolve) => {
                fetch(api)
                  .then((response) => response.json())
                  .then((data) => {
                    resolve(data.features);
                  })
                  .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(error);
                  });
              });
            },
            // nominatim GeoJSON format parse this part turns json into the list of
            // records that appears when you type.
            onResults: ({ currentValue, matches, template }) => {
              const regex = new RegExp(currentValue, 'gi');

              // if the result returns 0 we
              // show the no results element
              return matches === 0
                ? template
                : matches
                    .map((element) => {
                      return `
                    <li class="loupe">
                      <p>
                        ${element.properties.display_name.replace(
                          regex,
                          (str) => `<b>${str}</b>`,
                        )}
                      </p>
                    </li> `;
                    })
                    .join('');
            },
            onReset: () => {
              mapConditions.searchLatLng = null;
              createAllContent({});
            },
            // we add an action to enter or click
            onSubmit: ({ object }) => {
              const cord = object.geometry.coordinates;
              const searchLatLng = L.latLng(cord[1], cord[0]);

              // sets the view of the map
              map.setView([cord[1], cord[0]], afterSearchZoom);
              mapConditions.isSearchActive = true;
              mapConditions.searchLatLng = searchLatLng;
              createAllContent({ searchLatLng });

              if (!map.scrollWheelZoom.enabled()) {
                map.scrollWheelZoom.enable();
              }

              /*
                // eslint-disable-next-line camelcase
                const { display_name } = object.properties;

                // custom id for marker
                const customId = Math.random();

                // add icon after search submit
                const icon = L.divIcon({
                  className: `o-map__marker`,
                  iconSize: [20, 28],
                  popupAnchor: [0, 330],
                  iconAnchor: [9, 32],
                  html: `
                    <svg class="o-map__marker-icon" fill="red">
                      <use xlink:href="${svgSpritePath}#svg-map-point"></use>
                    </svg>
                  `,
                });

                // create marker and add to map
                // eslint-disable-next-line no-unused-vars
                const marker = L.marker([cord[1], cord[0]], {
                  icon,
                  title: display_name,
                  id: customId,
                })
                  .addTo(map)
                  .bindPopup(display_name);

                // removing the previous marker
                // if you want to leave markers on
                // the map, remove the code below
                map.eachLayer((layer) => {
                  if (layer.options && layer.options.pane === 'markerPane') {
                    if (layer.options.id !== customId) {
                      map.removeLayer(layer);
                    }
                  }
                }); */
            },

            // get index and data from li element after
            // hovering over li with the mouse or using
            // arrow keys ↓ | ↑
            /* onSelectedItem: ({ index, element, object }) => {
                      console.log('onSelectedItem:', index, element, object);
                    }, */

            // the method presents no results element
            noResults: ({ currentValue, template }) =>
              template(`<li>No results found: "${currentValue}"</li>`),
          });
        }
      }
      //
      // Autocomplete functionality
      // end

      if (filtersList) {
        filtersList.forEach((filterInput) => {
          filterInput.addEventListener('change', () => {
            // this need be first for fit bounds or not
            mapConditions.isMapFocused = true;
            createAllContent({});
          });
        });
      }

      createAllContent({});

      el.classList.add('map-processed');
    },
  );
};
