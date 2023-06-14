import { ElementNodeConfiguration, PROPERTY_DATA_TYPE, PROPERTY_DIRECTIONS } from 'omnia-component-framework';

import ComponentTypes from '../all-types';
const Image: ElementNodeConfiguration = {
  type: ComponentTypes.IMAGE,
  properties: [
    {
      key: 'source',
      isRequired: false,
      dataType: PROPERTY_DATA_TYPE.IMAGE,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    },
    {
      key: 'omniaUrl',
      isRequired: false,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    },
    {
      key: 'title',
      isRequired: false,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      direction: PROPERTY_DIRECTIONS.INBOUND,
    },
  ],
  events: [],
  methods: [],
  isContainer: false,
};

export default Image;
