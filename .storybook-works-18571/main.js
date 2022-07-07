// Tentative repro for https://github.com/storybookjs/storybook/issues/18571.
module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react"
};
