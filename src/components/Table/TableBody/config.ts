import { ElementNodeConfiguration } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableBody: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_BODY,
  properties: [],
  events: [],
  methods: [],
  isContainer: true, //KIND OF...
  allowedInnerElements: [ComponentTypes.TABLE_ROW],
  allowedParentElements: [ComponentTypes.TABLE],
};

export default TableBody;
