import { baseUrl } from '../helpers';
import { ChangeEvent, DownloadEvent, FileUploadSettings, MouseClickEvent, RemoveEvent } from './types';

export const translation = {
  buttonLabel: 'Files',
  uploadLabel: 'Select file(s)',
  noFilesLabel: 'No files to display',
  modalTitleLabel: 'Files',
  modalCloseLabel: 'Close',
};

export function getIdentifier() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16).replace(/-/g, '').toLowerCase();
  });
}

export function getButton(onClick: MouseClickEvent) {
  const button = document.createElement('button');
  button.setAttribute('class', 'btn btn-block btn-outline-secondary omnia-file-button');
  button.addEventListener('click', onClick);
  return button;
}

export function getButtonSpanLabel() {
  const span = document.createElement('span');
  span.setAttribute('class', 'omnia-file-button-label');
  span.innerHTML = translation.buttonLabel;
  return span;
}

export function getButtonSpanNumberFilesLabel() {
  const span = document.createElement('span');
  span.setAttribute('class', 'omnia-file-counter badge badge-primary');
  span.innerHTML = '0';
  return span;
}

export function getModalBackdrop() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop fade show';

  return backdrop;
}

export function getModal(
  settings: FileUploadSettings,
  onClose: MouseClickEvent,
  onDownload: DownloadEvent,
  onRemove: RemoveEvent,
  onAdd: ChangeEvent,
) {
  const modal = document.createElement('div');
  modal.className = 'modal fade show d-block';
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  modalContent.appendChild(getModalHeader());
  modalContent.appendChild(
    getModalBody(settings.files, settings.disabled, settings.multiple, settings.accept, onDownload, onRemove, onAdd),
  );
  modalContent.appendChild(getModalFooter(onClose));

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  return modal;
}

export function getModalHeader() {
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const header = document.createElement('h5');
  header.className = 'modal-title';
  header.innerText = translation.modalTitleLabel;

  modalHeader.appendChild(header);

  return modalHeader;
}

export function getModalBody(
  files: string[],
  disabled: boolean,
  multiple: boolean,
  accept: string,
  onDownload: DownloadEvent,
  onRemove: RemoveEvent,
  onAdd: ChangeEvent,
) {
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  modalBody.appendChild(getNoFilesLabel(files.length === 0));

  const list = getModalFileList();
  modalBody.appendChild(list);

  if (files.length > 0) {
    for (const file of files) {
      list.appendChild(getFileListEntry(file, disabled, onDownload, onRemove));
    }
  }

  if (disabled === false) {
    const fileInput = getFileInput(multiple, accept, onAdd);
    modalBody.appendChild(fileInput);
    modalBody.appendChild(getFileUploadButton(fileInput));
  }

  modalBody.appendChild(getErrorLabel());

  return modalBody;
}

export function getModalFileList() {
  const list = document.createElement('ul');
  list.className = 'list-group list-group-flush omnia-file-list';

  return list;
}

export function updateFileList(
  modal: HTMLDivElement,
  files: string[],
  disabled: boolean,
  onDownload: DownloadEvent,
  onRemove: RemoveEvent,
) {
  const list: HTMLUListElement | null = modal.querySelector('.omnia-file-list');
  if (list) list.innerHTML = '';

  for (const file of files) {
    list?.appendChild(getFileListEntry(file, disabled, onDownload, onRemove));
  }

  const noFilesLabel = modal.querySelector('.omnia-file-no-files-label');
  if (files.length === 0) noFilesLabel?.classList.remove('d-none');
  else noFilesLabel?.classList.add('d-none');
}

export function getFileListEntry(file: string, disabled: boolean, onDownload: DownloadEvent, onRemove: RemoveEvent) {
  const listEntry = document.createElement('li');
  listEntry.className = 'list-group-item d-flex justify-content-between align-items-center p-0 pt-1 pb-1';

  const fileNameSplit = file.split('/');
  const fileName = fileNameSplit[fileNameSplit.length - 1];

  const downloadFileButton = document.createElement('button');
  downloadFileButton.innerText = fileName;
  downloadFileButton.title = fileName;
  downloadFileButton.className = 'btn btn-link text-truncate';
  downloadFileButton.addEventListener('click', () => {
    onDownload(file);
  });

  listEntry.appendChild(downloadFileButton);

  if (disabled === false) {
    const removeFileButton = document.createElement('button');
    removeFileButton.innerHTML = '<i class="fa fa-trash"></i>';
    removeFileButton.className = 'btn btn-outline-danger pull-rigth';
    removeFileButton.addEventListener('click', () => {
      onRemove(file);
    });

    listEntry.appendChild(removeFileButton);
  }

  return listEntry;
}

export function getNoFilesLabel(visible: boolean) {
  const noFilesLabel = document.createElement('h6');
  noFilesLabel.className = 'omnia-file-no-files-label text-center';
  if (!visible) noFilesLabel.classList.add('d-none');
  noFilesLabel.textContent = translation.noFilesLabel;
  return noFilesLabel;
}

export function getErrorLabel() {
  const errorLabel = document.createElement('h6');
  errorLabel.className = 'omnia-file-error-label text-center text-danger d-none pt-2';
  return errorLabel;
}

export function getFileUploadButton(fileInput: HTMLInputElement) {
  const button = document.createElement('button');
  button.className = 'btn btn-primary btn-block omnia-file-selector-btn pt-2';
  button.innerHTML = translation.uploadLabel + '&nbsp<i class="fa fa-fw fa-spinner fa-pulse d-none"></i>';
  button.addEventListener('click', () => fileInput.click());
  return button;
}

export function getFileInput(multiple: boolean, accept: string, onChange: ChangeEvent) {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = multiple === true;
  input.accept = accept;
  input.style.display = 'none';
  input.addEventListener('change', onChange);

  return input;
}

export function getModalFooter(onClose: MouseClickEvent) {
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const closeButton = document.createElement('button');
  closeButton.className = 'btn btn-outline-secondary';
  closeButton.addEventListener('click', onClose);
  closeButton.innerHTML = translation.modalCloseLabel;

  modalFooter.appendChild(closeButton);

  return modalFooter;
}

export function toggleLoading(modal: HTMLDivElement) {
  const button = <HTMLButtonElement>modal.querySelector('.omnia-file-selector-btn');
  if (button) {
    button.disabled = !button.disabled;
    button.querySelector('i')?.classList.toggle('d-none');
  }
}

export function showErrorMessage(modal: HTMLDivElement, message: string) {
  const label = modal.querySelector('.omnia-file-error-label');
  if (label) {
    label.textContent = message;
    label.classList.remove('d-none');
  }
}

export function hideErrorMessage(modal: HTMLDivElement) {
  const label = modal.querySelector('.omnia-file-error-label');
  label?.classList.add('d-none');
}

export function endpoint(code: string, settings: FileUploadSettings) {
  return `${baseUrl}${settings.tenant}/${settings.environment}/application/${settings.entity}/Default/${code}/Files`;
}

export function downloadFile(file: string, tenant: string, environment: string, token: string) {
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

export async function deleteFile(file: string, tenant: string, environment: string, token: string) {
  const url = `${baseUrl}${tenant}/${environment}/application/${file}`;

  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: 'Bearer ' + token,
    }),
  });
}
