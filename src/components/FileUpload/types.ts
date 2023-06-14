type MouseClickEvent = (ev: MouseEvent) => void;
type ChangeEvent = (ev: Event) => void;
type DownloadEvent = (file: string) => void;
type RemoveEvent = (file: string) => void;

type FileUploadSettings = {
  files: string[];
  multiple: boolean;
  entity: string;
  disabled: boolean;
  filesToUpload: File[];
  tenant: string;
  environment: string;
  token: string;
  accept: string;
};

type FileUploadResult = {
  identifier: string;
  fileName: string;
  status: number;
  message: string;
};

export {
  type ChangeEvent,
  type DownloadEvent,
  type FileUploadResult,
  type FileUploadSettings,
  type MouseClickEvent,
  type RemoveEvent,
};
