import { useState } from "react";
import clsx from "clsx";
import defaultImg from "@assets/img/icon/icon_placeholder.svg";
import styles from "./ProductThumbnail.module.scss";

export default function ProductThumbnail({
  src: initialSrc = defaultImg,
  alt = "",
}) {
  const [src, setSrc] = useState(initialSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  let imgCss = clsx({
    [styles.default]: src === defaultImg,
    [styles.loaded]: isLoaded,
  });

  return (
    <figure className={styles.cover}>
      <img
        src={src}
        className={imgCss}
        alt={alt}
        onError={() => setSrc(defaultImg)}
        onLoad={() => setIsLoaded(true)}
      />
    </figure>
  );
}
