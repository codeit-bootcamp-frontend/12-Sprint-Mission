import { cloneElement, useState } from "react";
import { Modal } from "@components/ui";
import styles from "./Fullscreen.module.scss";

export function Fullscreen({ children }) {
  const [imgSrc, setImgSrc] = useState(null);

  function handleOpenScreen(src) {
    setImgSrc(src);
  }

  function handleCloseScreen() {
    setImgSrc(null);
  }

  return (
    <>
      {cloneElement(children, { onOpenScreen: handleOpenScreen })}
      {imgSrc && (
        <Modal>
          <ImgViewer src={imgSrc} onCloseScreen={handleCloseScreen} />
        </Modal>
      )}
    </>
  );
}

function ImgViewer({ src, onCloseScreen }) {
  return (
    <div className={styles.fullscreen} onClick={onCloseScreen}>
      <div className={styles.info}>아무곳이나 클릭하시면 닫힙니다.</div>
      <img src={src} alt="확대보기입니다. 한번더 클릭하시면 닫힙니다." />
    </div>
  );
}
