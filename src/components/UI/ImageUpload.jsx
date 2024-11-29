import { ReactComponent as PlusIcon } from "../../assets/images/icons/ic_plus.svg";
import "./ImageUpload.css";

function ImageUpload({ title }) {
  return (
    <div>
      {title && <div className="imageUploadTitle">{title}</div>}
      <div className="imageUploadContainer">
        <label htmlFor="imageUpload" className="uploadButton">
          <PlusIcon />
          이미지 등록
        </label>
      </div>
    </div>
  );
}

export default ImageUpload;
