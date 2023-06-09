import {
  ElementNodeConfiguration,
  IntegerPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';
const valueProperty: IntegerPropertyConfiguration = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.INTEGER,
  isCollection: false,
  defaultValue: 0,
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputIntegerConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_INTEGER,
  properties: [
    valueProperty,
    ...baseProperties,
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

export default InputIntegerConfig;
