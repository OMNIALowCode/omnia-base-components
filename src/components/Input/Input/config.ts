import {
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  TextPropertyConfiguration,
} from 'omnia-component-framework';

import ComponentTypes from '../../all-types';
import { baseProperties } from '../BaseProperties';

const valueProperty = {
  key: 'value',
  dataType: PROPERTY_DATA_TYPE.TEXT,
  isCollection: false,
  defaultValue: 'myText',
  direction: PROPERTY_DIRECTIONS.TWO_WAY,
} as TextPropertyConfiguration;

const InputConfig: ElementNodeConfiguration = {
  type: ComponentTypes.INPUT,
  properties: [valueProperty, ...baseProperties],
  events: [{ name: 'OnChange' }],
  methods: [],
  isContainer: false,
};

export default InputConfig;