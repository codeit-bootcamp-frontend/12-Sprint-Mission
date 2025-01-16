import Image from "next/image";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import iconError from "@assets/img/icon/icon_error.svg";
import iconWarn from "@assets/img/icon/icon_warn.svg";
import styles from "./Alert.module.scss";

interface AlertProps extends PropsWithChildren {
  mode?: "error" | "warn";
}

const iconImg = {
  warn: { src: iconWarn, alt: "경고" },
  error: { src: iconError, alt: "에러" },
};

export function Alert({ mode = "error", children }: AlertProps) {
  return (
    <div className={clsx(styles.alert, styles[mode])}>
      <Image src={iconImg[mode].src} alt={iconImg[mode].alt} />
      {children}
    </div>
  );
}
