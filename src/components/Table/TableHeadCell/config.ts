import {
  ElementNodeConfiguration,
  IntegerPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../../all-types';

const TableHeadCell: ElementNodeConfiguration = {
  type: ComponentTypes.TABLE_HEAD_CELL,
  properties: [
    {
      key: 'colspan',
      dataType: PROPERTY_DATA_TYPE.INTEGER,
      isCollection: false,
      defaultValue: 1,

      direction: PROPERTY_DIRECTIONS.INBOUND,
    } as IntegerPropertyConfiguration,
  ],
  events: [{ name: 'OnClick' }],
  methods: [],
  isContainer: true,
  allowedParentElements: [ComponentTypes.TABLE_ROW],
};

export default TableHeadCell;
