"use client";

import BoardListWrapper from "./BoardListWrapper";
import BestItem from "./BestItem";
import { useGetArticles } from "@/service/article.queries";
import { Loading } from "@/components/ui/Loading";

export default function BestList() {
  const { data, isPending } = useGetArticles("best", { pageSize: 3 });

  if (isPending) {
    return <Loading>loading...</Loading>;
  }

  const list = data?.list ?? [];

  if (list.length === 0) {
    return <div>게시물이 없습니다.</div>;
  }

  return (
    <>
      <BoardListWrapper mode="best" items={list}>
        {(item) => <BestItem data={item} />}
      </BoardListWrapper>
    </>
  );
}
