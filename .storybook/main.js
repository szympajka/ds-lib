const supportedApps = [
  'ds-app',
  'ds-app-with-ds',
];

const localStories = [
  "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx)",
];

const dsAppStories = [
  "../../ds/components/**/*.stories.mdx",
  "../../ds/components/**/*.stories.@(js|jsx|ts|tsx)"
]

const getStories = () => {
  const app = process.argv[process.argv.length - 1];

  if (app !== '6006' && !supportedApps.includes(app)) {
    console.error(`The ${app} is not supported by The Highway Code Design System Storybook. Storybook will be started with Design System Stories`);
    return localStories;
  }

  switch (app) {
    case 'ds-app': {
      return dsAppStories;
    }
    case 'ds-app-with-ds': {
      return [].concat(localStories, dsAppStories);
    }
    default: {
      return localStories;
    }
  }
};

module.exports = {
  "stories": () => getStories(),
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "storybook-builder-vite"
  }
}