import {
  BooleanPropertyConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  PropertyConfiguration,
} from 'omnia-component-framework';

export const baseProperties: PropertyConfiguration[] = [
  {
    key: 'readOnly',
    dataType: PROPERTY_DATA_TYPE.BOOLEAN,
    direction: PROPERTY_DIRECTIONS.INBOUND,
    isRequired: false,
  } as BooleanPropertyConfiguration,
];
