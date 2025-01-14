import Image from "next/image";
import clsx from "clsx";
import iconHeart from "@assets/img/icon/icon_heart.svg";
import styles from "./Like.module.scss";
import { maxNumber } from "@/util/formatter";

interface LikeProps {
  size?: "sm" | "lg";
  count: number;
  max?: number;
}

export function Like({ size = "lg", count, max = 9999 }: LikeProps) {
  return (
    <div className={clsx(styles.like, styles[size])}>
      <Image src={iconHeart} alt="좋아요" />
      {maxNumber(count, max)}
    </div>
  );
}
