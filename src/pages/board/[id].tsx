import styles from "./board.module.css";
import FormTextarea from "@/components/form/form-textarea";
import Link from "next/link";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBoard from "@/lib/fetch-board";
import formatDate from "@/lib/format-data";
import fetchComments from "@/lib/fetch-comments";
import ToggleMenu from "@/components/toggle-menu";
import BoardComment from "@/components/board-comment";
import { useEffect, useState } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const data = await fetchBoard(Number(id));
  const comment = await fetchComments(Number(id));
  return {
    props: {
      data,
      comment: comment?.list,
    },
  };
};

export default function Page({
  data,
  comment,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // null 일수도 있어서 예외처리를 해줘야 아래 data 사용 시 ?. 처리 안해줘도 됨.
  if (!data) return "문제가 발생했습니다. 다시 시도해주세요.";

  const [commentContent, setCommentContent] = useState("");
  const [commentState, setCommentState] = useState(true);

  const onChangeComment: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setCommentContent(e.target.value);
  };

  useEffect(() => {
    if (commentContent !== "") {
      setCommentState(false);
    } else {
      setCommentState(true);
    }
  }, [commentContent]);

  return (
    <>
      <div className={styles.board_info}>
        <ToggleMenu />
        <div className={`common_title ${styles.common_title}`}>
          {data.title}
        </div>
        <div className={styles.btm}>
          <div className={styles.profile}>
            <figure>
              <img src="/assets/img/icon_my.svg" alt={data.writer.nickname} />
            </figure>
            <p>{data.writer.nickname}</p>
            <span>{formatDate(data.updatedAt)}</span>
          </div>
          <div className={styles.like_btn}>
            {data.isLiked ? (
              <img src="/assets/img/icon_wish_active.svg" alt="좋아요 버튼" />
            ) : (
              <img src="/assets/img/icon_wish.svg" alt="좋아요 버튼" />
            )}
            <span>{data.likeCount}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {data.image ? <img src={data.image} alt={data.image} /> : null}
        {data.content}
      </div>

      <div className={styles.comment_add}>
        <h3>댓글달기</h3>
        <FormTextarea
          value={commentContent}
          onChange={onChangeComment}
          placeholder="댓글을 입력해주세요."
          height={104}></FormTextarea>
        <button className="btn" disabled={commentState}>
          등록
        </button>
      </div>
      {comment?.length === 0 ? (
        <div className={styles.empty}>
          <img src="/assets/img/comment_empty.png" alt="댓글없음" />
          <span>
            아직 댓글이 없어요, <br /> 지금 댓글을 달아보세요!
          </span>
        </div>
      ) : (
        <ul className={styles.list}>
          {comment?.map((el) => {
            return <BoardComment key={el.id} {...el} />;
          })}
        </ul>
      )}

      <Link className={`btn round img ${styles.link}`} href="/boards">
        목록으로 돌아가기
        <img src="/assets/img/icon_back.svg" alt="돌아가기 버튼" />
      </Link>
    </>
  );
}
