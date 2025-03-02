"use client";

import { Alert, Message } from "@components/ui";
import { Comment } from "./Comment";
import styles from "./CommentList.module.scss";
import {
  COMMENT_BACK_LINK,
  COMMENT_EMPTY,
  COMMENT_LOADING,
} from "@/constants/message";
import { BackToList } from "../Button";
import { BoardName } from "@/service/comment.type";
import { useParams } from "next/navigation";
import { useGetComments } from "@/service/comment.queries";

interface CommentListType {
  name: BoardName;
}

export function CommentList({ name }: CommentListType) {
  const { id } = useParams();
  const { isLoading, error, data, hasNextPage, fetchNextPage } = useGetComments(
    name,
    { id: Number(id), limit: 3 }
  );
  const comments = data?.pages.flatMap((page) => page.list) || [];

  return (
    <>
      <div className={styles.comments}>
        {comments.length === 0 && (
          <Message
            icon={COMMENT_EMPTY[name].image}
            alt={COMMENT_EMPTY[name].message}
          >
            {COMMENT_EMPTY[name].message}
          </Message>
        )}

        <ul className={styles.list}>
          {comments?.map((comment) => (
            <Comment key={comment.id} name={name} comment={comment} />
          ))}
        </ul>

        {error && <Alert>{error.message}</Alert>}

        {isLoading && <Message compact>{COMMENT_LOADING[name]}</Message>}

        {hasNextPage && (
          <div className={styles.control}>
            <button
              type="button"
              className={styles.button}
              onClick={() => fetchNextPage()}
            >
              더보기
            </button>
          </div>
        )}
      </div>
      <BackToList href={COMMENT_BACK_LINK[name]} />
    </>
  );
}
