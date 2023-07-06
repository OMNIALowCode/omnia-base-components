import { TYPE_ATTRIBUTE_TYPE, Type } from 'omnia-component-framework';

export const types: Type[] = [
  {
    name: 'SelectOption',
    attributes: [
      {
        name: 'label',
        type: TYPE_ATTRIBUTE_TYPE.TEXT,
      },
      {
        name: 'key',
        type: TYPE_ATTRIBUTE_TYPE.TEXT,
      },
    ],
  },
];

export type SelectOption = {
  key: string;
  label: string;
};
