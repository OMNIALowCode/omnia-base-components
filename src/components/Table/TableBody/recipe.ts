import { ToolBoxEntry } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'table body',
    icon: 'table',
    element: {
      name: 'tableBody',
      type: ComponentTypes.TABLE_BODY,
      elements: [
        {
          name: 'tableRow',
          type: ComponentTypes.TABLE_ROW,
          elements: [],
          attributes: [],
          behaviours: [],
          groupElements: false,
        },
      ],
      attributes: [],
      behaviours: [],
      groupElements: false,
    },
  },
];
export default recipes;
