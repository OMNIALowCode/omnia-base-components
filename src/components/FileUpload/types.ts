interface File {
  name: string;
}

interface FileUploadSettings {
  baseUrl: string;
  files: File[];
  multiple: boolean;
  entity: string;
  disabled: boolean;
  state: any;
  filesToUpload: File[];
  tenant: string;
  environment: string;
  token: string;
  accept: string;
}

export { type FileUploadSettings };
