import { DictionaryAny } from 'omnia-component-framework/dist/component-contract/src/contract/lib/Dictionary';

export function getAttributeValue<T>(attributes: DictionaryAny, attribute: string, defaultValue: T): any {
  return attributes && attribute in attributes ? attributes[attribute] : defaultValue;
}

export function getValue(attributes: DictionaryAny) {
  return getAttributeValue(attributes, 'value', null);
}

export function getReadOnly(attributes: DictionaryAny): boolean {
  return getAttributeValue(attributes, 'readOnly', false);
}

export function isNullOrEmpty(text: string | null | undefined): boolean {
  return text == null || text === '';
}
