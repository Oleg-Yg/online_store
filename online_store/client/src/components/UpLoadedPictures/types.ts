export interface UpLoadedPicturesProps {
  getUploadedImages: (array: File[]) => void;
  limit?: number;
}
