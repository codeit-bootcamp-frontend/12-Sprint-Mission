import { Article } from "@/types";
import Image from "next/image";
import style from "./BestItemCard.module.css";
import badge from "@/assets/images/img_badge.svg";
import heart from "@/assets/icons/heart.svg";
import { formatDate } from "@/utils/formattedDate";
import Link from "next/link";
import { useMemo } from "react";

interface BestItemCardProps {
  article: Article;
}

export default function BestItemCard({ article }: BestItemCardProps) {
  const { id, title, content, image, updatedAt, writer, likeCount } = article;

  const formattedDate = useMemo<string>(() => {
    return formatDate(updatedAt);
  }, [updatedAt]);

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
