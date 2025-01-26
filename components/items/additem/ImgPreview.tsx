import styles from "../../../styles/items/additem.module.css";
import DeleteBtnImg from "@/public/assets/images/items/cancel.svg";
import { PreviewProps } from "./types";
import Image from "next/image";

function ImgPreview({ preview, handleDeleteClick }: PreviewProps) {
  return (
    <>
      <Image src={preview} alt="상품 이미지 미리보기" fill />
      <div className={styles.circle} onClick={handleDeleteClick}>
        <DeleteBtnImg />
      </div>
    </>
  );
}

export default ImgPreview;
