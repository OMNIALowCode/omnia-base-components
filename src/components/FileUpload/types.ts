type MouseClickEvent = (ev: MouseEvent) => void;

type ChangeEvent = (ev: Event) => void;
type DownloadEvent = (file: string) => void;
type RemoveEvent = (file: string) => void;

interface FileUploadSettings {
  files: string[];
  multiple: boolean;
  entity: string;
  disabled: boolean;
  filesToUpload: File[];
  tenant: string;
  environment: string;
  token: string;
  accept: string;
}

interface FileUploadResult {
  identifier: string;
  fileName: string;
  status: number;
  message: string;
}

export {
  type FileUploadSettings,
  type FileUploadResult,
  type MouseClickEvent,
  type ChangeEvent,
  type DownloadEvent,
  type RemoveEvent,
};
