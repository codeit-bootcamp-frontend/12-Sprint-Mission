import { Article } from "@/types";
import style from "./ArticleItemCard.module.css";
import profileImg from "@/assets/images/profile.svg";
import heartIcon from "@/assets/icons/heart.svg";
import Image from "next/image";
import { formatDate } from "@/utils/formattedDate";
import Link from "next/link";

export function ArticleItemCard({ id, title, content, image, likeCount, writer, updatedAt }: Article) {
  const formattedDate = formatDate(updatedAt);

  return (
    <div className={style.container}>
      <Link href={`/boards/${id}`} className={style.link}>
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
      </Link>
    </div>
  );
}
