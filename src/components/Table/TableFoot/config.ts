import { ElementNodeConfiguration } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableFoot: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_FOOT,
  properties: [],
  events: [],
  methods: [],
  isContainer: true,
  allowedInnerElements: [ComponentTypes.TABLE_ROW],
  allowedParentElements: [ComponentTypes.TABLE]
};

export default TableFoot;
