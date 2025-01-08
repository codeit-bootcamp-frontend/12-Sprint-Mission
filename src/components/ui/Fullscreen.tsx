"use client";

import Image from "next/image";
import { cloneElement, ReactElement, useState } from "react";
import { Modal } from "@components/ui";
import styles from "./Fullscreen.module.scss";

export function Fullscreen({
  children,
}: {
  children: ReactElement<{ onFullScreen?: (src: string) => void }>;
}) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  function handleOpenScreen(src: string) {
    setImgSrc(src);
  }

  function handleCloseScreen() {
    setImgSrc(null);
  }

  return (
    <>
      {cloneElement(children, { onFullScreen: handleOpenScreen })}
      {imgSrc && (
        <Modal>
          <ImgViewer src={imgSrc} onCloseScreen={handleCloseScreen} />
        </Modal>
      )}
    </>
  );
}

function ImgViewer({
  src,
  onCloseScreen,
}: {
  src: string;
  onCloseScreen: () => void;
}) {
  return (
    <div className={styles.fullscreen} onClick={onCloseScreen}>
      <div className={styles.info}>아무곳이나 클릭하시면 닫힙니다.</div>
      <Image src={src} alt="확대보기입니다. 한번더 클릭하시면 닫힙니다." fill />
    </div>
  );
}
