import { useState, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../assets/images/icons/ic_plus.svg";
import DeleteButton from "./DeleteButton";
import "./ImageUpload.css";

function ImageUpload({ title }) {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

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

  const handleImageLimit = (e) => {
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
    <div>
      <h2 className="imageUploadTitle">{title}</h2>
      <div className="imageUploadContainer">
        <label
          htmlFor="imageUpload"
          className="uploadButton"
          onClick={handleImageLimit}
        >
          <PlusIcon />
          이미지 등록
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </label>

        {image && (
          <div className="imagePreviewContainer">
            <img src={image} alt="미리보기" className="imagePreview" />
            <div className="imageDeleteButton">
              <DeleteButton onClick={handleImageDelete} />
            </div>
          </div>
        )}
      </div>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
}

export default ImageUpload;
