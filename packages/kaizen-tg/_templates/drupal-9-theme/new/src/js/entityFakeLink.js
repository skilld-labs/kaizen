---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/src/js/entityFakeLink.js
---
import '@skilld/kaizen-core/helpers/entity-fake-link/h-entity-fake-link';

// Uncomment next behavior if you need custom entity-fake-link functionality.
// (({ behaviors }) => {
//   behaviors.<%= h.changeCase.snakeCase(name) %>_h_entity_fake_link = {
//     attach: (context, settings) => {
//       settings.behaviors = {
//         ...settings.behaviors,
//         kaizen_core_h_entity_fake_link: {
//           entries: [
//             {
//               wrapperData: '.custom-el',
//               targetData: '.custom-el__link',
//             },
//           ],
//         },
//       };
//     },
//   };
// })(Drupal);
