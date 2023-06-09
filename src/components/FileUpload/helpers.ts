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

export function getButton(onClick) {
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

export function getModal(settings, onClose, onDownload, onRemove, onAdd) {
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
    getModalBody(settings.files, settings.language, settings.disabled, settings.multiple, onDownload, onRemove, onAdd),
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

export function getModalBody(files, language, disabled, multiple, onDownload, onRemove, onAdd) {
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
    const fileInput = getFileInput(multiple, onAdd);
    modalBody.appendChild(fileInput);
    modalBody.appendChild(getFileUploadButton(language, fileInput));
  }

  modalBody.appendChild(getErrorLabel());

  return modalBody;
}

export function getModalFileList() {
  const list = document.createElement('ul');
  list.className = 'list-group list-group-flush omnia-file-list';

  return list;
}

export function updateFileList(modal, files, disabled, onDownload, onRemove) {
  const list = modal.querySelector('.omnia-file-list');
  list.innerHTML = '';

  for (const file of files) {
    list.appendChild(getFileListEntry(file, disabled, onDownload, onRemove));
  }

  const noFilesLabel = modal.querySelector('.omnia-file-no-files-label');
  if (files.length === 0) noFilesLabel.classList.remove('d-none');
  else noFilesLabel.classList.add('d-none');
}

export function getFileListEntry(file, disabled, onDownload, onRemove) {
  const listEntry = document.createElement('li');
  listEntry.className = 'list-group-item d-flex justify-content-between align-items-center p-0 pt-1 pb-1';

  const fileNameSplit = file.name.split('/');
  const fileName = fileNameSplit.length > 1 ? fileNameSplit[1] : fileNameSplit[0];

  const downloadFileButton = document.createElement('button');
  downloadFileButton.innerText = fileName;
  downloadFileButton.title = fileName;
  downloadFileButton.className = 'btn btn-link text-truncate';
  downloadFileButton.addEventListener('click', onDownload(file.name));

  listEntry.appendChild(downloadFileButton);

  if (disabled === false) {
    const removeFileButton = document.createElement('button');
    removeFileButton.innerHTML = '<i class="fa fa-trash"></i>';
    removeFileButton.className = 'btn btn-outline-danger pull-rigth';
    removeFileButton.addEventListener('click', onRemove(file.name));

    listEntry.appendChild(removeFileButton);
  }

  return listEntry;
}

export function getNoFilesLabel(visible) {
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

export function getFileUploadButton(language, fileInput) {
  const button = document.createElement('button');
  button.className = 'btn btn-primary btn-block omnia-file-selector-btn pt-2';
  button.innerHTML = translation.uploadLabel + '&nbsp<i class="fa fa-fw fa-spinner fa-pulse d-none"></i>';
  button.addEventListener('click', () => fileInput.click());
  return button;
}

export function getFileInput(multiple, onChange) {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = multiple === true;
  input.style.display = 'none';
  input.addEventListener('change', onChange);

  return input;
}

export function getModalFooter(onClose) {
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const closeButton = document.createElement('button');
  closeButton.className = 'btn btn-outline-secondary';
  closeButton.addEventListener('click', onClose);
  closeButton.innerHTML = translation.modalCloseLabel;

  modalFooter.appendChild(closeButton);

  return modalFooter;
}

export function toggleLoading(modal) {
  const button = modal.querySelector('.omnia-file-selector-btn');
  button.disabled = !button.disabled;
  button.querySelector('i').classList.toggle('d-none');
}

export function showErrorMessage(modal, message) {
  const label = modal.querySelector('.omnia-file-error-label');
  label.textContent = message;
  label.classList.remove('d-none');
}

export function hideErrorMessage(modal) {
  const label = modal.querySelector('.omnia-file-error-label');
  label.classList.add('d-none');
}
