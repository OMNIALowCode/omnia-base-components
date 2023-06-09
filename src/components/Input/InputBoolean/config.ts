import {
  BooleanPropertyConfiguration,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';

import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';
const valueProperty: BooleanPropertyConfiguration = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.BOOLEAN,
  isCollection: false,
  defaultValue: false,
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputBooleanConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_BOOLEAN,
  properties: [valueProperty, ...baseProperties],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputBooleanConfig;
