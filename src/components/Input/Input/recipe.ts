import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'text input',
    icon: 'pencil-square-o',
    element: {
      name: 'input',
      type: ComponentTypes.INPUT,
      elements: [],
      attributes: [
        {
          key: 'value',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: 'input',
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
