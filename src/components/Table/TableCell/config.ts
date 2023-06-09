import {
  ElementNodeConfiguration,
  IntegerPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableCellConfiguration: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_CELL,
  properties: [
    {
      key: 'colspan',
      dataType: PROPERTY_DATA_TYPE.INTEGER,
      isCollection: false,
      defaultValue: 1,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    } as IntegerPropertyConfiguration,
  ],
  events: [],
  methods: [],
  isContainer: true,
  allowedParentElements: [ComponentTypes.TABLE_ROW],
};

export default TableCellConfiguration;
