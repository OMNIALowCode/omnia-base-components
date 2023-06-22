import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'text',
    icon: 'tag',
    element: {
      name: 'text',
      type: ComponentTypes.TEXT,
      elements: [],
      attributes: [
        {
          key: 'value',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: 'myText',
          },
        },
      ],
      behaviours: [],
      groupElements: false,
    },
  },
];
export default recipes;
