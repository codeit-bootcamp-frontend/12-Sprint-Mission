import iconError from "@assets/img/icon/icon_error.svg";
import iconWarn from "@assets/img/icon/icon_warn.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";

const iconImg = {
  warn: { src: iconWarn, alt: "경고" },
  error: { src: iconError, alt: "에러" },
};

export default function Alert({ mode = "error", children }) {
  return (
    <div className={clsx(styles.alert, styles[mode])}>
      <img src={iconImg[mode].src} alt={iconImg[mode].alt} />
      {children}
    </div>
  );
}
