import { ToolBoxEntry } from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const recipes: ToolBoxEntry[] = [
  {
    name: 'image',
    icon: 'picture-o',
    element: {
      name: ComponentTypes.IMAGE,
      type: ComponentTypes.IMAGE,
      elements: [],
      attributes: [],
      behaviours: [],
      groupElements: false,
    },
  },
];
export default recipes;
