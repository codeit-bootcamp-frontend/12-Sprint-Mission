import { ChangeEvent, useEffect, useRef, useState } from "react";

interface SingleFileProps {
  value: (File | string)[];
  onChange: (file: (File | string)[]) => void;
  accept?: string;
  limitSize?: number;
  errorMessage?: {
    max?: string;
    accept?: string;
  };
}

export default function useSingleFile({
  value,
  onChange,
  accept = "",
  limitSize = 5,
  errorMessage = {},
}: SingleFileProps) {
  const preview =
    value?.[0] instanceof File ? URL.createObjectURL(value[0]) : value?.[0];
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const defaultMessage = {
    max: "등록은 최대 1개까지 가능합니다.",
    size: `${limitSize}MB 이하로 올려주세요`,
    accept: "지원하지 않는 형식입니다.",
  };

  const message = { ...defaultMessage, ...errorMessage };

  useEffect(() => {
    return () => {
      if (preview && value?.[0] instanceof File) {
        URL.revokeObjectURL(preview);
      }
    };
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setError(null);

    if (value.length) {
      return setError(message.max);
    }

    if (!file.type.match(accept)) {
      return setError(message.accept);
    }
    if (file.size > limitSize * 1024 * 1024) {
      return setError(message.size);
    }

    if (fileRef.current) {
      fileRef.current.value = "";
    }

    onChange([file]);
  }

  function handleRemove() {
    if (!fileRef.current) return;

    fileRef.current.value = "";
    setError(null);
    onChange([]);
  }

  return {
    fileProps: {
      ref: fileRef,
      type: "file",
      accept,
      onChange: handleChange,
    },
    fileError: error,
    handleRemove,
    preview,
  };
}
