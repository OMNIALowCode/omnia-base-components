interface File {
  name: string;
}

interface FileUploadSettings {
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

export { type FileUploadSettings, type File };
