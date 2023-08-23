import {
  BooleanPropertyConfiguration,
  ElementNodeConfiguration,
  ObjectPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const Select: ElementNodeConfiguration = {
  type: ComponentTypes.SELECT,
  properties: [
    {
      key: 'options',
      isCollection: true,
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.OBJECT,
      typeName: 'SelectOption',
    } as ObjectPropertyConfiguration,
    {
      key: 'value',
      direction: PROPERTY_DIRECTIONS.TWO_WAY,
      dataType: PROPERTY_DATA_TYPE.TEXTVALUE,
    },
    {
      key: 'readOnly',
      dataType: PROPERTY_DATA_TYPE.BOOLEAN,
      direction: PROPERTY_DIRECTIONS.INBOUND,
      isRequired: false,
    } as BooleanPropertyConfiguration,
  ],
  events: [{ name: 'OnSelect' }],
  methods: [],
  isContainer: false,
};

export default Select;
