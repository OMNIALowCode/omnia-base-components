import { ToolBoxEntry } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'table foot',
    icon: 'table',
    element: {
      name: 'tableFoot',
      type: ComponentTypes.TABLE_FOOT,
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
