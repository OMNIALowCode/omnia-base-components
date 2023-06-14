import { ExternalElementNodePropsType, onUpdateBindingType } from 'omnia-component-framework';
import { getAttributeValue } from '../helpers';
import {
  downloadFile,
  endpoint,
  getButton,
  getButtonSpanLabel,
  getButtonSpanNumberFilesLabel,
  getIdentifier,
  getModal,
  getModalBackdrop,
  hideErrorMessage,
  showErrorMessage,
  toggleLoading,
  translation,
  updateFileList,
} from './helpers';
import { FileUploadSettings } from './types';

class FileUpload extends HTMLElement {
  private _settings: FileUploadSettings;
  private _button: HTMLButtonElement;
  private _buttonSpanLabel: HTMLSpanElement;
  private _buttonSpanNumberFilesLabel: HTMLSpanElement;
  private _modal: any;
  private _modalBackdrop: any;
  private _updateBinding: onUpdateBindingType | null;

  constructor() {
    super();

    this._settings = {
      files: [],
      multiple: false,
      entity: '',
      disabled: false,
      state: null,
      filesToUpload: [],
      tenant: '',
      environment: '',
      token: '',
      accept: '',
    };

    this.onModalClose = this.onModalClose.bind(this);
    this.onFileDownload = this.onFileDownload.bind(this);
    this.onFileRemove = this.onFileRemove.bind(this);
    this.onAddFile = this.onAddFile.bind(this);
    this.setFiles = this.setFiles.bind(this);

    // DOM
    this._button = getButton(this.onButtonClick.bind(this));
    this._buttonSpanLabel = getButtonSpanLabel();
    this._buttonSpanNumberFilesLabel = getButtonSpanNumberFilesLabel();

    this._button.appendChild(this._buttonSpanLabel);
    this._button.appendChild(this._buttonSpanNumberFilesLabel);

    this._modal = null;
    this._modalBackdrop = null;
    this._updateBinding = null;
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    translation.buttonLabel = getAttributeValue(renderProps.attributes, 'buttonLabel', null) ?? translation.buttonLabel;
    translation.uploadLabel = getAttributeValue(renderProps.attributes, 'uploadLabel', null) ?? translation.uploadLabel;
    translation.noFilesLabel =
      getAttributeValue(renderProps.attributes, 'noFilesLabel', null) ?? translation.noFilesLabel;
    translation.modalTitleLabel =
      getAttributeValue(renderProps.attributes, 'modalTitleLabel', null) ?? translation.modalTitleLabel;
    translation.modalCloseLabel =
      getAttributeValue(renderProps.attributes, 'modalCloseLabel', null) ?? translation.modalCloseLabel;

    this._updateBinding = renderProps.onUpdateBinding;
    this._buttonSpanLabel.textContent = translation.buttonLabel;
    this.setFiles(getAttributeValue(renderProps.attributes, 'value', ''));
    this._settings.entity = getAttributeValue<string>(renderProps.attributes, 'entity', '');
    this._settings.multiple = getAttributeValue<boolean>(renderProps.attributes, 'multiple', false);
    this._settings.accept = getAttributeValue<string>(renderProps.attributes, 'accept', '');

    this._settings.disabled = this._settings.entity
      ? getAttributeValue<boolean>(renderProps.attributes, 'readOnly', false)
      : true;
    this._settings.token = renderProps?.authentication?.token ?? '';
    this._settings.tenant = renderProps?.tenant?.code ?? '';
    this._settings.environment = renderProps?.tenant?.environment ?? '';
  }

  connectedCallback() {
    this.appendChild(this._button);
  }

  disconnectedCallback() {
    if (this._modalBackdrop && document.body.contains(this._modalBackdrop))
      document.body.removeChild(this._modalBackdrop);

    if (this._modal && this.contains(this._modal)) this.removeChild(this._modal);
  }

  onButtonClick() {
    if (this._modalBackdrop && document.body.contains(this._modalBackdrop))
      document.body.removeChild(this._modalBackdrop);

    if (this._modal && this.contains(this._modal)) this.removeChild(this._modal);

    this._modalBackdrop = getModalBackdrop();
    this._modal = getModal(this._settings, this.onModalClose, this.onFileDownload, this.onFileRemove, this.onAddFile);

    document.body.appendChild(this._modalBackdrop);
    this.appendChild(this._modal);
  }

  onModalClose() {
    this.removeChild(this._modal);
    document.body.removeChild(this._modalBackdrop);

    this._modalBackdrop = null;
    this._modal = null;
  }

  onFileDownload(file: string) {
    return () => downloadFile(file, this._settings.tenant, this._settings.environment, this._settings.token);
  }

  onFileRemove(file: string) {
    return () => this.deleteFile(file);
  }

  onAddFile(e: any) {
    this._settings.filesToUpload = e.target.files;
    this.save();
  }

  setFiles(newValue: string) {
    this._settings.files =
      newValue != null && newValue !== ''
        ? newValue.split(';').map(fileName => {
            return { name: fileName };
          })
        : [];

    this._buttonSpanNumberFilesLabel.textContent = `${this._settings?.files?.length ?? 0}`;
    if (this._modal)
      updateFileList(
        this._modal,
        this._settings.files,
        this._settings.disabled,
        this.onFileDownload,
        this.onFileRemove,
      );
  }

  async deleteFile(file: string) {
    const fileNameSplit = file.split('/');
    const fileName = fileNameSplit.length > 1 ? fileNameSplit[1] : fileNameSplit[0];
    const originalCode = fileNameSplit[0];
    const url = `${endpoint(originalCode, this._settings)}/${fileName}`;

    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + this._settings.token,
      }),
    }).then(() => {
      this._settings.files = this._settings.files.filter(f => f.name !== file);
      this.updateValue(this._settings.files.map(f => f.name).join(';'));
    });
  }

  save() {
    const requests: any[] = [];
    for (const file of this._settings.filesToUpload) {
      const uploadIdentifier = getIdentifier();
      requests.push(this.uploadFile(uploadIdentifier, file));
    }

    if (requests.length === 0) return;

    if (this._modal) toggleLoading(this._modal);

    Promise.all(requests)
      .then((responses: any) => {
        const errorMessage = responses
          .filter((entry: any) => entry.status >= 400)
          .map((entry: any) => entry.message)
          .join('. ');

        if ((errorMessage || '') !== '') {
          if (this._modal) showErrorMessage(this._modal, errorMessage);
          else console.log(errorMessage);
          return [];
        } else {
          if (this._modal) hideErrorMessage(this._modal);
          return responses;
        }
      })
      .then(responses => {
        if (responses.length > 0) {
          const newValue = this._settings.multiple ? this._settings.files.map(f => f.name) : [];
          for (const response of responses) {
            newValue.push(`${this._settings.entity}/Default/${response.identifier}/Files/${response.fileName}`);
          }
          this.updateValue(newValue.join(';'));
        }

        if (this._modal) toggleLoading(this._modal);
      });
  }

  async uploadFile(identifier: string, file: any) {
    const formData = new FormData();

    if (file && file.name) {
      const fileNameSplit = file.name.split('/');
      const fileName = fileNameSplit.length > 1 ? fileNameSplit.pop() : fileNameSplit[0];
      formData.set('file', file, fileName);
    } else {
      formData.set('file', file);
    }

    return fetch(endpoint(identifier, this._settings), {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + this._settings.token,
      }),
      body: formData,
    }).then(response => ({
      identifier: identifier,
      fileName: file.name,
      status: response.status,
      message: `${file.name}: ${response.statusText}`,
    }));
  }

  updateValue(newValue: string) {
    if (this._updateBinding) this._updateBinding('value', newValue);
  }
}
export default FileUpload;
