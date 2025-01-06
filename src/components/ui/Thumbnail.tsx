"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import defaultImg from "@assets/img/icon/icon_placeholder.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Thumbnail.module.scss";

interface ThumbnailProps {
  src?: string;
  alt?: string;
  onRemove?: () => void;
  aspectRatio?: string;
  onFullScreen?: (src: string) => void;
}

export function Thumbnail({
  src = defaultImg,
  alt = "",
  onRemove,
  aspectRatio = "1 / 1",
  onFullScreen,
}: ThumbnailProps) {
  const [isDefault, setIsDefault] = useState(src === defaultImg);
  const hasFullScreen = onFullScreen && !isDefault;

  const coverCss = clsx(styles.cover, hasFullScreen && styles.fullscreen);
  const imgCss = clsx(styles.img, isDefault && styles.default);

  return (
    <figure
      className={coverCss}
      style={{ aspectRatio }}
      {...(hasFullScreen && { onClick: () => onFullScreen(src) })}
    >
      {onRemove && (
        <button type="button" className={styles.button} onClick={onRemove}>
          <Image src={clearIcon} alt="삭제" />
        </button>
      )}

      <Image
        className={imgCss}
        src={!isDefault ? src : defaultImg}
        alt={alt}
        onError={() => setIsDefault(true)}
      />
    </figure>
  );
}
