const { kebabCase } = require('lodash');

const Router = {
  Storage: ['useStorage'],
};

function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: langPrefix === '/' ? '介绍' : 'Getting started',
      link: `${langPrefix}`,
    },
    ...Object.entries(Router).map(([text, children]) => ({
      text,
      children: children.map(hookName => ({
        link: `${langPrefix}components/${kebabCase(hookName)}/`,
        text: hookName,
      })),
    })),
  ];
}

module.exports = {
  getRouterConfig,
};