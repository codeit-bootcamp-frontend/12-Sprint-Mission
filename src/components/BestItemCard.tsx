import { Article } from "@/types";
import Image from "next/image";
import style from "./BestItemCard.module.css";
import badge from "@/assets/images/img_badge.svg";
import heart from "@/assets/icons/heart.svg";
import { formatDate } from "@/utils/formattedDate";
import Link from "next/link";

export default function BestItemCard({ id, content, updatedAt, likeCount, writer, image, title }: Article) {
  const formattedDate = formatDate(updatedAt);

  return (
    <Link href={`boards/${id}`} className={style.link}>
      <div className={style.container}>
        <Image src={badge.src || badge} alt="Best" width={102} height={30} />
        <div className={style.content_wrapper}>
          <p>{content}</p>
          <div>
            <img src={image} alt={title} />
          </div>
        </div>
        <div className={style.card_footer}>
          <div className={style.card_footer_wrapper}>
            <p>{writer.nickname}</p>
            <div>
              <Image src={heart} alt="좋아요" />
              <p>{likeCount}</p>
            </div>
          </div>
          <p className={style.updated_date}>{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
