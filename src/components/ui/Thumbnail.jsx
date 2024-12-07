import clsx from "clsx";
import defaultImg from "@assets/img/icon/icon_placeholder.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Thumbnail.module.scss";
import { useState } from "react";

export function Thumbnail({
  src = defaultImg,
  alt = "",
  onRemove,
  aspectRatio = "1 / 1",
  onOpenScreen,
}) {
  const [isDefault, setIsDefault] = useState(src === defaultImg);
  const hasFullScreen = onOpenScreen && !isDefault;

  const coverCss = clsx(styles.cover, hasFullScreen && styles.fullscreen);
  const imgCss = clsx(styles.img, isDefault && styles.default);

  return (
    <figure
      className={coverCss}
      style={{ aspectRatio }}
      {...(hasFullScreen && { ...{ onClick: () => onOpenScreen(src) } })}
    >
      {onRemove && (
        <button type="button" className={styles.button} onClick={onRemove}>
          <img src={clearIcon} alt="삭제" />
        </button>
      )}

      <img
        className={imgCss}
        src={!isDefault ? src : defaultImg}
        alt={alt}
        onError={() => setIsDefault(true)}
      />
    </figure>
  );
}
