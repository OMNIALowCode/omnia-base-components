import { Component } from 'omnia-component-framework';

import config from './config';
import toolBoxEntries from './recipe';
import { types } from './types';

const component: Component = {
  name: config.type,
  configuration: config,
  webComponent: async () => (await import('./component')).default,
  extendTag: 'select',
  toolBoxEntries: toolBoxEntries,
  types: types,
};

export default component;
