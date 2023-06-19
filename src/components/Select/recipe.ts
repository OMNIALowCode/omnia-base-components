import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'select',
    icon: 'list',
    element: {
      name: 'select',
      type: ComponentTypes.SELECT,
      elements: [],
      attributes: [
        {
          key: 'options',
          value: {
            source: ToolBoxEntryAttributeValueSource.Expression,
            value: '//',
          },
        },
      ],
      behaviours: [],
      classesStyles: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'form-control',
      },
      groupElements: false,
    },
  },
];
export default recipes;
