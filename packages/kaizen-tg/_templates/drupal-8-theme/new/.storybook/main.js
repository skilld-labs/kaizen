---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/main.js
---
module.exports = {
  stories: ['@skilld/kaizen-core/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.twig$/,
        loader: 'twig-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    );

    // Return the altered config
    return config;
  },
};
