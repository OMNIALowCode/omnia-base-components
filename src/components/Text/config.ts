import {
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  TextPropertyConfiguration,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const Text: ElementNodeConfiguration = {
  type: ComponentTypes.TEXT,
  properties: [
    {
      key: 'value',
      isReadOnly: false,
      isCollection: false,
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      defaultValue: 'myText',
    } as TextPropertyConfiguration,
  ],
  events: [{ name: 'OnClick' }],
  methods: [],
  isContainer: false,
};

export default Text;
