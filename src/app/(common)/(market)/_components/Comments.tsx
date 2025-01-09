"use client";

import { BoardName, CommentList as CommentListType } from "@/types/comment";
import { CommentAdd, CommentList } from "@/components/Comment";
import CommentsProvider from "@/context/CommentContext";

type CommentsType = {
  name: BoardName;
  data: CommentListType;
};

export default function Comments({ name, data }: CommentsType) {
  return (
    <CommentsProvider name={name} initialData={data}>
      <CommentAdd />
      <CommentList />
    </CommentsProvider>
  );
}
