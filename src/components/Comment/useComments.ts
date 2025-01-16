import { getComments } from "@service/comments";
import { BoardName, CommentList } from "@type/comment";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useComments(
  id: number,
  name: BoardName,
  initialComments: CommentList
) {
  const { isLoading, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["comments", name, id],
      queryFn: ({ pageParam = undefined }) =>
        getComments(name, { id, cursor: pageParam }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: 0,
      initialData: {
        pageParams: [0],
        pages: [initialComments],
      },
    });
  const comments = data?.pages.flatMap((page) => page.list) || [];

  return {
    isLoading,
    error,
    comments,
    hasNextPage,
    fetchNextPage,
  };
}
