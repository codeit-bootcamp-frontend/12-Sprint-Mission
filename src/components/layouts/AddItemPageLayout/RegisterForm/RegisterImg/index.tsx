import styled from 'styled-components';
import closeImg from '@/assets/images/ic_X.svg';
import plusImg from '@/assets/images/ic_plus.svg';

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--gray100);
  border-radius: 12px;
  width: 280px;
  height: 280px;
  background-color: var(--gray100);
  color: var(--gray400);
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

const PreviewImg = styled.img`
  border-radius: 12px;
  width: 280px;
  height: 280px;
  @media (max-width: 1200px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

const ImgArea = styled.div`
  display: flex;
  gap: 10px;
`;

const PreviewImgArea = styled.div`
  position: relative;
`;

const CloseImg = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const RegisterImg = ({ imgPreview, setImgPreview, fileInputRef, setIsImg }) => {
  const changeImg = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    if (imgPreview) {
      setIsImg(true);
      return;
    }

    const preview = URL.createObjectURL(file);

    setImgPreview(preview);
  };

  const closePreview = () => {
    if (imgPreview) {
      URL.revokeObjectURL(imgPreview);
      setImgPreview(null);
      setIsImg(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }
  };
  return (
    <ImgArea>
      <FileButton htmlFor="file">
        <img src={plusImg} alt="+ 이미지" />
        이미지 등록
      </FileButton>
      <FileInput
        id="file"
        name="file"
        type="file"
        onChange={changeImg}
        ref={fileInputRef}
      />
      {imgPreview && (
        <PreviewImgArea>
          <PreviewImg src={imgPreview} alt="이미지 미리보기" />
          <CloseImg src={closeImg} alt="닫기 이미지" onClick={closePreview} />
        </PreviewImgArea>
      )}
    </ImgArea>
  );
};

export default RegisterImg;
