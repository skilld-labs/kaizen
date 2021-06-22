---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/main.js
---
module.exports = {
  stories: [
    '@skilld/kaizen-core/**/*.stories.@(ts|js)',
<% if(type==='primary'){ -%>
    '@skilld/kaizen-primary/**/*.stories.@(ts|js)',
<% } -%>
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.yml$/,
        use: [
          {
            loader: '@skilld/kaizen-breakpoints/loader',
          },
        ],
      },
      {
        test: /\.twig$/,
        loader: 'twig-loader',
      },
    );

    // Return the altered config
    return config;
  },
};
