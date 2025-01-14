import Image from "next/image";
import iconHeart from "@assets/img/icon/icon_heart.svg";
import iconHeartFill from "@assets/img/icon/icon_heart_fill.svg";
import styles from "./LikeButton.module.scss";
import clsx from "clsx";

interface LikeButtonProps {
  count: number;
  isLiked: boolean;
  onClick: () => void;
}

export function LikeButton({ count, isLiked, onClick }: LikeButtonProps) {
  const buttonCss = clsx(styles.button, isLiked && styles.active);
  return (
    <button type="button" className={buttonCss} onClick={onClick}>
      <Image src={isLiked ? iconHeartFill : iconHeart} alt="좋아요" />
      {count}
    </button>
  );
}
