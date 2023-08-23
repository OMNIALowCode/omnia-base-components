import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'radio input',
    icon: 'check-circle-o',
    element: {
      name: 'inputRadioPanel',
      type: ComponentTypes.PANEL,
      elements: [
        {
          name: 'inputRadio',
          type: ComponentTypes.INPUT_RADIO,
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
        {
          name: 'inputRadioText',
          type: ComponentTypes.TEXT,
          elements: [],
          attributes: [
            {
              key: 'value',
              value: {
                source: ToolBoxEntryAttributeValueSource.Direct,
                value: 'radio text',
              },
            },
          ],
          behaviours: [],
          classesStyles: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: 'ml-2 mt-1',
          },
          groupElements: false,
        },
      ],
      attributes: [],
      behaviours: [],
      classesStyles: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'd-flex',
      },
      groupElements: true,
    },
  },
];
export default recipes;
