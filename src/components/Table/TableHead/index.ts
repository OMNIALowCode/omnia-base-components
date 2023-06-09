import { Component } from 'omnia-component-framework';

import config from './config';
import toolBoxEntries from './recipe';

const component: Component = {
  name: config.type,
  configuration: config,
  webComponent: async () => (await import('./component')).default,
  extendTag: 'thead',
  toolBoxEntries: toolBoxEntries,
};

export default component;
