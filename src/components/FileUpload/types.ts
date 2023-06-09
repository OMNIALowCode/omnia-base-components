interface File {
  name: string;
}

interface FileUploadSettings {
  baseUrl: string;
  files: File[];
  multiple: boolean;
  entity: string;
  uploadAddress: string;
  disabled: boolean;
  state: any;
  filesToUpload: File[];
  tenant: string;
  environment: string;
  token: string;
  dataSource: string;
}

export { type FileUploadSettings };

