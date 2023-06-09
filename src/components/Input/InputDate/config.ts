import {
  DatePropertyConfiguration,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';

import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';
const valueProperty: DatePropertyConfiguration = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.DATE,
  isCollection: false,
  defaultValue: new Date(),
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
};

const InputDateConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT_DATE,
  properties: [valueProperty, ...baseProperties],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputDateConfig;
