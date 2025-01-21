import { useRef, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import icClose from "../assets/ic_X.svg";
import icPlus from "../assets/ic_plus.svg";

const InputFileLabel = styled.p`
  line-height: 26px;
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--gray-scale-800);
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InputInnerWrap = styled.div`
  display: flex;
  align-items: end;
  gap: 24px;
  @media (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
const Label = styled.label`
  @media (max-width: 767px) {
    width: 49%;
  }
`;
const InputFileButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-scale-100);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--gray-scale-400);
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;
const InputFileIcon = styled.img`
  width: 48px;
  height: 48px;
`;
const InputFile = styled.input`
  display: none;
`;
const PreviewWrap = styled.div`
  width: 282px;
  height: 282px;
  position: relative;
  @media (max-width: 767px) {
    width: 49%;
    height: auto;
  }
`;
const ClearButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
const PreviewImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
`;
const ErrorTxt = styled.p`
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  color: var(--error);
`;

// 타입 설정
type FileInputProps = {
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
};

function FileInput({ name, value, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imgValue = e.target.files ? e.target.files[0] : null;
    onChange(name, imgValue);
  };

  const handleDisabledClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (value) {
      e.preventDefault();
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
    setError(null);
  };

  useEffect(() => {
    if (!value) return;
    const imgPreview = URL.createObjectURL(value);
    setPreview(imgPreview);

    return () => {
      setPreview(undefined);
      URL.revokeObjectURL(imgPreview);
    };
  }, [value]);

  return (
    <InputWrap>
      <InputFileLabel>상품이미지</InputFileLabel>
      <InputInnerWrap>
        <Label htmlFor="imgFile">
          <InputFileButton>
            <InputFileIcon src={icPlus} alt="이미지 등록 아이콘" />
            <p>이미지 등록</p>
          </InputFileButton>
        </Label>
        <InputFile
          id="imgFile"
          name={name}
          accept="image/png, image/jpeg"
          type="file"
          onChange={handleChange}
          ref={inputRef}
          onClick={handleDisabledClick}
        />
        {value && (
          <PreviewWrap>
            <ClearButton onClick={handleClearClick}>
              <img src={icClose} alt="x버튼" />
            </ClearButton>
            <PreviewImg src={preview} alt="이미지 미리보기" />
          </PreviewWrap>
        )}
      </InputInnerWrap>
      {error && <ErrorTxt>{error}</ErrorTxt>}
    </InputWrap>
  );
}

export default FileInput;
