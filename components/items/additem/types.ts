// ImgPreview.tsx
export interface PreviewProps {
  preview: string;
  handleDeleteClick: () => void;
}

// RegisterImgFile.tsx
export interface ImgFileProps {
  imgFile: Blob | MediaSource | null;
  setImgFile: React.Dispatch<React.SetStateAction<Blob | MediaSource | null>>;
}

// RegisterInput.tsx
export interface InitialValues {
  setValues: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      price: number | string;
      tag: string[];
    }>
  >;
}
