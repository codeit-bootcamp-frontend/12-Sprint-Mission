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
import useComments from "./useComments";
import { BoardName, CommentList as CommentData } from "@/types/comment";
import { useParams } from "next/navigation";

interface CommentListType {
  name: BoardName;
  data: CommentData;
}

export function CommentList({ name, data }: CommentListType) {
  const { id } = useParams();
  const { isLoading, error, comments, hasNextPage, fetchNextPage } =
    useComments(Number(id), name, data);

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
