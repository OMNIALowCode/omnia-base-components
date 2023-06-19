import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'fileupload',
    icon: 'floppy-o',
    element: {
      name: 'fileUpload',
      type: ComponentTypes.FILE_UPLOAD,
      elements: [],
      attributes: [
        {
          key: 'value',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: '',
          },
        },
        {
          key: 'readOnly',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: false,
          },
        },
        {
          key: 'multiple',
          value: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: false,
          },
        },
      ],
      behaviours: [],
      groupElements: false,
    },
  },
];
export default recipes;
