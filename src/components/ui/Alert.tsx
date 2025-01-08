import { ReactNode } from "react";
import clsx from "clsx";
import iconError from "@assets/img/icon/icon_error.svg";
import iconWarn from "@assets/img/icon/icon_warn.svg";
import styles from "./Alert.module.scss";

interface AlertProps {
  mode?: "error" | "warn";
  children: ReactNode;
}

const iconImg = {
  warn: { src: iconWarn, alt: "경고" },
  error: { src: iconError, alt: "에러" },
};

export function Alert({ mode = "error", children }: AlertProps) {
  return (
    <div className={clsx(styles.alert, styles[mode])}>
      <img src={iconImg[mode].src} alt={iconImg[mode].alt} />
      {children}
    </div>
  );
}
