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

export function downloadFile(file: string, baseUrl: string, tenant: string, environment: string, token: string) {
  const url = `${baseUrl}${tenant}/${environment}/application/${file}`;

  fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(response => response.blob())
    .then(blob => {
      const fileNameSplit = file.split('/');
      const fileName = fileNameSplit[fileNameSplit.length - 1];
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
}
