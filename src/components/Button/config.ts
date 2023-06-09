import {
  BooleanPropertyConfiguration,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';
const Button: ElementNodeConfiguration = {
  type: ComponentTypes.BUTTON,
  properties: [
    {
      key: 'disabled',
      dataType: PROPERTY_DATA_TYPE.BOOLEAN,
      isCollection: false,
      defaultValue: false,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    } as BooleanPropertyConfiguration,
  ],
  isContainer: true,
  events: [{ name: 'OnClick' }],
  methods: [],
  classesStylesDefaultValue: 'btn btn-primary',
};

export default Button;
