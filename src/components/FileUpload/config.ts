import {
  BooleanPropertyConfiguration,
  ElementNodeConfiguration,
  PROPERTY_DATA_TYPE,
  PROPERTY_DIRECTIONS,
  TextPropertyConfiguration,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const FileUpload: ElementNodeConfiguration = {
  type: ComponentTypes.FILE_UPLOAD,
  properties: [
    {
      key: 'value',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      defaultValue: '',
    } as TextPropertyConfiguration,
    {
      key: 'readOnly',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.BOOLEAN,
      defaultValue: false,
    } as BooleanPropertyConfiguration,
    {
      key: 'multiple',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.BOOLEAN,
      defaultValue: false,
    } as BooleanPropertyConfiguration,
    {
      key: 'entity',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      isRequired: true,
    } as TextPropertyConfiguration,
    {
      key: 'dataSource',
      isRequired: true,
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
      defaultValue: 'Default',
    } as TextPropertyConfiguration,
    {
      key: 'uploadAddress',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
    {
      key: 'buttonLabel',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
    {
      key: 'uploadLabel',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
    {
      key: 'noFilesLabel',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
    {
      key: 'modalTitleLabel',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
    {
      key: 'modalCloseLabel',
      direction: PROPERTY_DIRECTIONS.INBOUND,
      dataType: PROPERTY_DATA_TYPE.TEXT,
    } as TextPropertyConfiguration,
  ],
  events: [],
  methods: [],
  isContainer: false,
};

export default FileUpload;
