import { ElementNodeConfiguration } from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const Table: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE,
  properties: [],
  events: [],
  methods: [],
  isContainer: true,
  allowedInnerElements: [
    ComponentTypes.TABLE_HEAD,
    ComponentTypes.TABLE_BODY,
    ComponentTypes.TABLE_FOOT,
    ComponentTypes.TABLE_ROW,
  ],
};

export default Table;
