import {
  ElementNodeConfiguration,
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

const InputPasswordConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_PASSWORD,
  properties: [valueProperty, ...baseProperties],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputPasswordConfig;
