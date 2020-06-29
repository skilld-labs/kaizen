module.exports = {
  stories: ['../packages/components/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    'storybook-addon-paddings',
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
