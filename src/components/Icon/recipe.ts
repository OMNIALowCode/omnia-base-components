import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'icon',
    icon: 'font-awesome',
    element: {
      name: ComponentTypes.ICON,
      type: ComponentTypes.ICON,
      elements: [],
      attributes: [
        {
          key: 'value',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: 'font-awesome',
          },
        },
      ],
      behaviours: [],
      groupElements: false,
    },
  },
];
export default recipes;
