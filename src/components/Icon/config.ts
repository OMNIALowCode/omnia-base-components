import {
  ComplexOption,
  ComplexOptionPropertyConfiguration,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';
import { ICONS } from './icons';

const _icons = ICONS.map<ComplexOption>(icon => ({ text: icon, value: icon }));

const Icon: ElementNodeConfiguration = {
  type: ComponentTypes.ICON,
  properties: [
    {
      key: 'value',
      options: _icons,
      dataType: PROPERTY_DATA_TYPE.COMPLEX_OPTION,
      isCollection: false,
      direction: PROPERTY_DIRECTIONS.INBOUND,
      defaultValue: 'font-awesome',
    } as ComplexOptionPropertyConfiguration,
  ],
  events: [{ name: 'OnClick' }],
  methods: [],
  isContainer: false,
};

export default Icon;
