import { Component } from 'omnia-component-framework';

import config from './config';

const component: Component = {
  name: config.type,
  configuration: config,
  webComponent: async () => (await import('./component')).default,
  extendTag: 'textarea',
  toolBoxEntries: [],
};

export default component;
