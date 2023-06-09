import {
  ComplexOption,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  TextPropertyConfiguration,
} from 'omnia-component-framework';

const targets: ComplexOption[] = [
  { value: '_self', text: '_self' },
  { value: '_blank', text: '_blank' },
  { value: '_parent', text: '_parent' },
  { value: '_top', text: '_top' },
  { value: 'framename', text: 'framename' },
];

import ComponentTypes from '../all-types';
const Link: ElementNodeConfiguration = {
  type: ComponentTypes.LINK,
  properties: [
    {
      key: 'link',
      isReadOnly: false,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      isCollection: false,
      defaultValue: '',
      direction: PROPERTY_DIRECTIONS.INBOUND,
    } as TextPropertyConfiguration,
    {
      key: 'target',
      isReadOnly: false,
      dataType: PROPERTY_DATA_TYPE.COMPLEX_OPTION,
      options: targets,
      isCollection: false,
      defaultValue: '_self',
      direction: PROPERTY_DIRECTIONS.INBOUND,
    } as TextPropertyConfiguration,
  ],
  events: [],
  methods: [],
  isContainer: true,
};

export default Link;
