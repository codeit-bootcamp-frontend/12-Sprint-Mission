import iconHeart from "@assets/img/icon/icon_heart.svg";
import iconHeartFill from "@assets/img/icon/icon_heart_fill.svg";
import styles from "./LikeButton.module.scss";
import clsx from "clsx";

export function LikeButton({ count, isLiked, onClick }) {
  const buttonCss = clsx(styles.button, isLiked && styles.active);
  return (
    <button type="button" className={buttonCss} onClick={onClick}>
      <img src={isLiked ? iconHeartFill : iconHeart} alt="좋아요" />
      {count}
    </button>
  );
}
