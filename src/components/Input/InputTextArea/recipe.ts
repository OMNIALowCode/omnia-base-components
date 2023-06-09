import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'textarea input',
    icon: 'file-text-o',
    element: {
      name: ComponentTypes.INPUT_TEXTAREA,
      type: ComponentTypes.INPUT_TEXTAREA,
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
