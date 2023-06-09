import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'button',
    icon: 'toggle-on',
    element: {
      name: ComponentTypes.BUTTON,
      type: ComponentTypes.BUTTON,
      elements: [
        {
          name: 'Icon',
          type: ComponentTypes.ICON,
          elements: [],
          attributes: [
            {
              key: 'value',
              value: {
                value: 'font-awesome',
                source: ToolBoxEntryAttributeValueSource.Direct,
              },
            },
          ],
          behaviours: [],
          classesStyles: {
            source: ToolBoxEntryAttributeValueSource.Direct,
            value: 'pt-1',
          },
          groupElements: false,
        },
        {
          name: 'Text',
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
      ],
      attributes: [],
      behaviours: [],
      classesStyles: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'd-inline-flex btn btn-primary',
      },
      groupElements: true,
    },
  },
];
export default recipes;
