import { fetchArticleById } from "@/lib/fetchArticleById";
import { fetchCommentsByArticleId } from "@/lib/fetchCommentsByArticleId";
import { ArticleDetailResponse, FetchCommentsResponse } from "@/types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { formatDate } from "@/utils/formattedDate";
import { addComment } from "@/services/commentService";
import { useMemo, useState } from "react";
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import style from "./[id].module.css";
import ProfileImg from "@/assets/images/profile.svg";
import HeartIc from "@/assets/icons/heart.svg";

interface DetailPageProps {
  article: ArticleDetailResponse;
  comments: FetchCommentsResponse;
}

export default function Page({ article, comments }: DetailPageProps) {
  const formattedDate = useMemo<string>(() => {
    return formatDate(article.updatedAt);
  }, [article.updatedAt]);
  const [commentContent, setCommentContent] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (!commentContent.trim()) return;

    try {
      await addComment({
        articleId: article.id,
        content: commentContent,
      });
      setCommentContent("");
      alert("댓글이 등록되었습니다.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "댓글 등록 실패");
      } else {
        alert("댓글 등록 실패");
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.header_wrapper}>
            <h2>{article.content}</h2>
            <div className={style.header_section}>
              <div>
                <Image src={ProfileImg} width={40} height={40} alt="프로필이미지" />
                <div>
                  <p className={style.nickname}>{article.writer.nickname}</p>
                  <p className={style.date}>{formattedDate}</p>
                </div>
              </div>
              <div className={style.button_wrapper}>
                <button className={style.like_button}>
                  <Image src={HeartIc} width={27} height={23} alt="좋아요 버튼" />
                  {article.likeCount}
                </button>
              </div>
            </div>
          </div>
          <p className={style.content}>{article.content}</p>
        </div>
        <div className={style.section}>
          <div className={style.input_wrapper}>
            <p>댓글달기</p>
            <textarea placeholder="댓글을 입력해주세요." value={commentContent} onChange={handleCommentChange} />
            <div>
              <button onClick={handleCommentSubmit} disabled={!commentContent}>
                등록
              </button>
            </div>
          </div>
          <div className={style.comment_wrapper}>
            {comments.list.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DetailPageProps> = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  try {
    const article = await fetchArticleById(Number(id));
    if (!article) {
      return {
        notFound: true,
      };
    }

    const comments = await fetchCommentsByArticleId(Number(id), 10);
    if (!comments) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article,
        comments,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};