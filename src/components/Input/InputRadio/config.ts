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
  dataType: PROPERTY_DATA_TYPE.TEXTVALUE,
  isCollection: false,
  defaultValue: '',
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const nameProperty: TextPropertyConfiguration = {
  key: 'name',
  dataType: PROPERTY_DATA_TYPE.TEXTVALUE,
  isCollection: false,
  defaultValue: '',
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputBooleanConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_RADIO,
  properties: [valueProperty, nameProperty, ...baseProperties],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputBooleanConfig;
