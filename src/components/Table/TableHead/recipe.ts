import { ToolBoxEntry } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'table head',
    icon: 'table',
    element: {
      name: ComponentTypes.TABLE_HEAD,
      type: ComponentTypes.TABLE_HEAD,
      elements: [
        {
          name: 'TableRow',
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
