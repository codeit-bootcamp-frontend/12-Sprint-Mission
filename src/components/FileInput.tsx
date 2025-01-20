import addImg from "./../assets/icon_add.svg";
import removeIcon from "./../assets/icon_remove.svg";
import { useEffect, useState, useRef } from "react";
import "./FileInput.css";
import { ItemInputQuery } from "../types/Query";

interface Props {
  name: ItemInputQuery;
  value: File;
  onChange: (name: ItemInputQuery, value: File | null) => void;
}

function FileInput({ name, value, onChange }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(name, e.target.files[0]);
    }
  };

  const [fileImg, setFileImg] = useState("");
  const [limit, setLimit] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setFileImg(url);
    } else {
      setLimit(false);
    }
  }, [value]);

  const handlePreviewRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFileImg("");
    onChange(name, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddLimit = (e: React.MouseEvent<HTMLLabelElement>) => {
    setLimit(true);
  };

  return (
    <>
      <div className="file_add_wrap">
        <label onClick={fileImg ? handleAddLimit : undefined} htmlFor={!fileImg ? "add_img" : undefined}>
          <img src={addImg} alt="이미지 등록" />
          <span>이미지 등록</span>
        </label>

        <div className={`limit_text ${limit && "active"}`}>*이미지 등록은 최대 1개까지 가능합니다.</div>
      </div>
      {fileImg && (
        <ul className="file_img_list">
          <li>
            <button type="button" onClick={handlePreviewRemove} className="btn_reset remove_btn">
              <img src={removeIcon} alt="삭제하기" />
            </button>
            <img src={fileImg} alt="" />
          </li>
        </ul>
      )}
      <input type="file" name="{name}" id="add_img" onChange={handleFileChange} ref={fileInputRef} />
    </>
  );
}

export default FileInput;
