"use client";

import { Article } from "@/types/article";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useArticleActions from "./useArticleActions";
import { More } from "@/components/Button";
import { Author, Fullscreen, LikeButton, Thumbnail } from "@/components/ui";
import styles from "./BoardDetail.module.scss";

interface BoardDetailProps {
  detail: Article;
}

export default function BoardDetail({ detail }: BoardDetailProps) {
  const {
    id,
    image,
    title,
    content,
    writer: { nickname, id: ownerId },
    updatedAt,
    likeCount,
    isLiked,
  } = detail;

  const { data: session } = useSession();
  const router = useRouter();
  const { handleLike, handleArticleDelete } = useArticleActions(id);
  const isOwner = ownerId === Number(session?.user?.id);

  async function handleToggleLike() {
    if (!session?.user) {
      return alert("로그인이 필요합니다.");
    }
    await handleLike(!isLiked);
    router.refresh();
  }

  function handleModify() {
    if (!isOwner) {
      return alert("작성자만 수정이 가능합니다.");
    }

    router.push(`/modifyBoard/${id}`);
  }

  async function handleDelete() {
    if (!isOwner) {
      return alert("작성자만 삭제가 가능합니다.");
    }

    if (confirm("정말 삭제할까요?")) {
      try {
        await handleArticleDelete();
        alert("상품을 삭제했습니다.");
        router.replace("/boards");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className={styles.detail}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.controls}>
          <More
            options={[
              { label: "수정하기", action: handleModify },
              { label: "삭제하기", action: handleDelete },
            ]}
          />
        </div>
      </header>
      <div className={styles.meta}>
        <Author nickname={nickname} updatedAt={updatedAt} />
        <div className={styles.controls}>
          <LikeButton
            count={likeCount}
            isLiked={isLiked}
            onClick={handleToggleLike}
          />
        </div>
      </div>
      <div>
        {image && (
          <div className={styles.image}>
            <Fullscreen>
              <Thumbnail src={image} alt={title} />
            </Fullscreen>
          </div>
        )}
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}
