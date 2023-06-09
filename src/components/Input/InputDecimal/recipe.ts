import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'decimal input',
    icon: 'hashtag',
    element: {
      name: ComponentTypes.INPUT_DECIMAL,
      type: ComponentTypes.INPUT_DECIMAL,
      elements: [],
      attributes: [],
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
