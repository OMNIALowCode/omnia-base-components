import {
  ElementNodeConfiguration,
  IntegerPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  TextPropertyConfiguration,
} from 'omnia-component-framework';
import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';
const valueProperty: TextPropertyConfiguration = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.TEXT,
  isCollection: false,
  defaultValue: '',
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputTextAreaConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_TEXTAREA,
  properties: [
    valueProperty,
    ...baseProperties,
    {
      key: 'rows',
      dataType: PROPERTY_DATA_TYPE.INTEGER,
      isCollection: false,
      defaultValue: 3,
      direction: PROPERTY_DIRECTIONS.TWO_WAY,
    } as IntegerPropertyConfiguration,
  ],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputTextAreaConfig;
