import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'boolean input',
    icon: 'hashtag',
    element: {
      name: 'inputBoolean',
      type: ComponentTypes.INPUT_BOOLEAN,
      elements: [],
      attributes: [],
      behaviours: [],
      classesStyles: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'form-control',
      },
      cssStyle: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'width:30px;',
      },
      groupElements: false,
    },
  },
];
export default recipes;
