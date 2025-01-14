import { Article } from "@/types";
import style from "./ArticleItemCard.module.css";
import profileImg from "@/assets/images/profile.svg";
import heartIcon from "@/assets/icons/heart.svg";
import Image from "next/image";
import { formatDate } from "@/utils/formattedDate";

interface ArticleItemCardProps extends Article {}

export function ArticleItemCard({ title, content, image, likeCount, writer, updatedAt }: ArticleItemCardProps) {
  const formattedDate = formatDate(updatedAt);

  return (
    <div className={style.container}>
      <div className={style.content_wrapper}>
        <p>{content}</p>
        <div>
          <img src={image || profileImg.src} alt={title} />
        </div>
      </div>
      <div className={style.content_footer}>
        <div className={style.content_footer_wrapper}>
          <Image src={profileImg} alt="프로필" width={24} height={24} />
          <p className={style.nickname}>{writer.nickname}</p>
          <p className={style.date}>{formattedDate}</p>
        </div>
        <div className={style.likeCount}>
          <Image src={heartIcon} alt="좋아요" width={24} height={24} />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}
