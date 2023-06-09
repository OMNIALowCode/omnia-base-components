import {
  DecimalPropertyConfiguration,
  ElementNodeConfiguration,
  IntegerPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';
const valueProperty: DecimalPropertyConfiguration = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.DECIMAL,
  isCollection: false,
  defaultValue: 0,
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const decimalPlacesProperty: IntegerPropertyConfiguration = {
  key: 'decimalPlaces',
  dataType: PROPERTY_DATA_TYPE.INTEGER,
  isCollection: false,
  defaultValue: 2,
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputDecimalConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_DECIMAL,
  properties: [
    valueProperty,
    ...baseProperties,
    decimalPlacesProperty,
    {
      key: 'minimumValue',
      dataType: PROPERTY_DATA_TYPE.INTEGER,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    },
    {
      key: 'maximumValue',
      dataType: PROPERTY_DATA_TYPE.INTEGER,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    },
  ],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputDecimalConfig;
