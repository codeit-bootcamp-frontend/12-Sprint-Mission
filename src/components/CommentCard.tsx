import style from "./CommentCard.module.css";
import ProfileImg from "@/assets/images/profile.svg";
import { Comment } from "@/types";
import { formatRelativeTime } from "@/utils/formatRelativeTime";
import Image from "next/image";
import { useMemo } from "react";

interface CommentProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentProps) {
  const formatDate = useMemo<string>(() => {
    return formatRelativeTime(comment.updatedAt);
  }, [comment.updatedAt]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <p className={style.content}>{comment.content}</p>
        <div className={style.info}>
          <Image src={ProfileImg} alt="프로필이미지" width={32} height={32} />
          <div>
            <p className={style.nickname}>{comment.writer.nickname}</p>
            <p className={style.date}>{formatDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
