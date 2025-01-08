"use client";

import useResponsive from "@/hooks/useResponsive";
import useBoardList from "./useBoardList";
import BestListWrapper from "./BestListWrapper";
import BestItem from "./BestItem";
import { Message } from "@/components/ui";

export default function BestList() {
  const pageSize = useResponsive({
    pc: 3,
    tablet: 2,
    mobile: 1,
  });
  const { isLoading, error, items } = useBoardList({
    pageSize,
    orderBy: "like",
  });

  if (error) {
    return <Message>데이터를 가져오는데 문제가 생겼습니다.</Message>;
  }

  if (isLoading) {
    return <Message>베스트 게시글을 가져오는 중입니다.</Message>;
  }

  return (
    <>
      <BestListWrapper items={items}>
        {(item) => <BestItem data={item} />}
      </BestListWrapper>
    </>
  );
}
