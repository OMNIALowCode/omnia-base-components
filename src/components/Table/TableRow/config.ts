import { ElementNodeConfiguration } from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableRow: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_ROW,
  properties: [],
  events: [],
  methods: [],
  isContainer: true,
  allowedInnerElements: [ComponentTypes.TABLE_HEAD_CELL, ComponentTypes.TABLE_CELL],
  allowedParentElements: [
    ComponentTypes.TABLE_HEAD,
    ComponentTypes.TABLE_BODY,
    ComponentTypes.TABLE_FOOT,
    ComponentTypes.TABLE,
  ],
};

export default TableRow;
