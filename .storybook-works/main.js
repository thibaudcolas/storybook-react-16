module.exports = {
  core: { builder: "webpack5" },
  stories: ["../stories/**/*.stories.jsx"],
  // Comment this line to break the build.
  addons: [],
  framework: "@storybook/react",
  // Added for the log output only.
  webpackFinal: (config, { configType }) => {
    console.log(config.plugins[config.plugins.length - 1]);
    return config;
  },
};
