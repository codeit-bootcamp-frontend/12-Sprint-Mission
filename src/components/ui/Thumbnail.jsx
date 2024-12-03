import clsx from "clsx";
import defaultImg from "@assets/img/icon/icon_placeholder.svg";
import clearIcon from "@assets/img/icon/icon_clear.svg";
import styles from "./Thumbnail.module.scss";

export function Thumbnail({
  src = defaultImg,
  alt = "",
  onRemove,
  aspectRatio = "1 / 1",
}) {
  function handleError(e) {
    e.target.src = defaultImg;
    e.target.classList.add(styles.default);
  }

  const imgCss = clsx(styles.img, src === defaultImg && styles.default);

  return (
    <figure className={styles.cover} style={{ aspectRatio }}>
      {onRemove && (
        <button type="button" className={styles.button} onClick={onRemove}>
          <img src={clearIcon} alt="삭제" />
        </button>
      )}

      <img className={imgCss} src={src} alt={alt} onError={handleError} />
    </figure>
  );
}
