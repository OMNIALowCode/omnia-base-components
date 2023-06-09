import { ElementNodeConfiguration } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableHead: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_HEAD,
  properties: [],
  events: [],
  methods: [],
  isContainer: true, //KIND OF...
  allowedInnerElements: [ComponentTypes.TABLE_ROW],
  allowedParentElements: [ComponentTypes.TABLE],
};

export default TableHead;
