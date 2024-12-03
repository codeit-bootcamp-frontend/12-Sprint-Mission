import { useEffect, useRef, useState } from "react";

export default function useSingleFile({
  value,
  onChange,
  accept = "",
  limiSize = 5,
  errorMessage = {},
}) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const fileRef = useRef(null);

  const defaultMessage = {
    max: "등록은 최대 1개까지 가능합니다.",
    size: `${limiSize}MB 이하로 올려주세요`,
    accept: "지원하지 않는 형식입니다.",
  };

  const message = { ...defaultMessage, ...errorMessage };

  useEffect(() => {
    if (!value) return;

    if (typeof value === "string") {
      setPreview(value);

      return () => {
        setPreview(null);
      };
    } else {
      const objectURL = URL.createObjectURL(value);
      setPreview(objectURL);

      return () => {
        setPreview(null);
        URL.revokeObjectURL(objectURL);
      };
    }
  }, [value]);

  function handleChange(e) {
    const file = e.target.files[0];
    setError(null);

    if (value) {
      return setError(message.max);
    }

    if (!file.type.match(accept)) {
      return setError(message.accept);
    }
    if (file.size > limiSize * 1024 * 1024) {
      return setError(message.size);
    }

    fileRef.current.value = "";
    onChange(file);
  }

  function handleRemove() {
    console.log("e");
    if (!fileRef.current) return;

    fileRef.current.value = "";
    setError(null);
    onChange(undefined);
  }

  return {
    fileProps: {
      ref: fileRef,
      type: "file",
      accept,
      onChange: handleChange,
    },
    preview,
    fileError: error,
    handleRemove,
  };
}
