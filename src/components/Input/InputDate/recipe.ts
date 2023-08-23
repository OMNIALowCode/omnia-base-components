import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'date input',
    icon: 'hashtag',
    element: {
      name: 'inputDate',
      type: ComponentTypes.INPUT_DATE,
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
