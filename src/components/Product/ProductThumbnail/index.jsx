import { useState } from "react";
import clsx from "clsx";
import defaultImg from "@assets/img/icon/icon_placeholder.svg";
import styles from "./styles.module.scss";

export default function ProductThumbnail({ src = defaultImg, alt = "" }) {
  const [isDefault, setIsDefault] = useState(src === defaultImg);

  function handleImgError() {
    setIsDefault(true);
  }

  let imgCss = clsx({
    [styles.default]: isDefault,
  });

  return (
    <figure className={styles.cover}>
      <img
        src={!isDefault ? src : defaultImg}
        className={imgCss}
        alt={alt}
        onError={handleImgError}
      />
    </figure>
  );
}
