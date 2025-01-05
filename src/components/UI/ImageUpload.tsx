import { useState, useEffect } from "react";
import PlusIcon from "@/assets/images/icons/ic_plus.svg?react";
import DeleteButton from "./DeleteButton";
import styled from "styled-components";

const ImageUploadWrapper = styled.div``;

const ImageUploadTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--secondary-800);
`;

const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const UploadButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  width: 28.2rem;
  height: 28.2rem;
  border-radius: 1.2rem;
  background-color: var(--secondary-100);
  color: var(--secondary-400);
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 20rem;
    height: 20rem;
  }
`;

const ImagePreviewContainer = styled.div`
  position: relative;
  width: 28.2rem;
  height: 28.2rem;

  @media (max-width: 1199px) {
    width: 20rem;
    height: 20rem;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  object-fit: cover;
`;

const ImageDeleteButton = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
`;

const ErrorMessage = styled.p`
  margin-top: 1.6rem;
  color: var(--error-red);
  font-size: 1.6rem;
  line-height: 2.6rem;
`;

function ImageUpload({ title }: { title: string }) {
  const [image, setImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setErrorMessage("");
      e.target.value = "";
    }
  };

  const handleImageDelete = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }
    setImage(null);
    setErrorMessage("");
  };

  const handleImageLimit = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (image) {
      e.preventDefault();
      setErrorMessage("*이미지 등록은 최대 1개까지만 가능합니다.");
    }
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <ImageUploadWrapper>
      <ImageUploadTitle>{title}</ImageUploadTitle>
      <ImageUploadContainer>
        <UploadButton htmlFor="imageUpload" onClick={handleImageLimit}>
          <PlusIcon />
          이미지 등록
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </UploadButton>

        {image && (
          <ImagePreviewContainer>
            <ImagePreview src={image} alt="미리보기" />
            <ImageDeleteButton>
              <DeleteButton onClick={handleImageDelete} />
            </ImageDeleteButton>
          </ImagePreviewContainer>
        )}
      </ImageUploadContainer>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ImageUploadWrapper>
  );
}

export default ImageUpload;
