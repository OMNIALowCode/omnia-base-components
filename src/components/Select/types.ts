import { TYPE_PROPERTY_TYPE, Type } from 'omnia-component-framework';

export const types: Type[] = [
  {
    name: 'SelectOption',
    properties: [
      {
        name: 'label',
        type: TYPE_PROPERTY_TYPE.TEXT,
      },
      {
        name: 'key',
        type: TYPE_PROPERTY_TYPE.TEXT,
      },
    ],
  },
];

export type SelectOption = {
  key: string;
  label: string;
};
