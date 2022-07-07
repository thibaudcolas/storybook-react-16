# storybook-react-16-addons

Reproduction case for a React < 18 issue with Storybook v6.5.9.

Error message:

```
ERR! => Failed to build the preview
ERR! Module not found: Error: Can't resolve 'react-dom/client' in '/Users/thibaudcolas/Dev/playground/storybook-react-16/node_modules/@storybook/react/dist/esm/client/preview'
```

This seems to be caused by the absence of `addons` in the Storybook config:

```js
module.exports = {
  core: { builder: "webpack5" },
  stories: ["../stories/**/*.stories.jsx"],
  // Un-comment this to fix the build.
  // addons: [],
  framework: "@storybook/react",
};
```

When `addons` is missing, Storybook’s IgnorePlugin hack isn’t getting loaded. Even an empty `addons` array fixes the build.
