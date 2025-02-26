import { BoardName } from "@/service/comment.type";
import { CursorParams } from "@/types/common";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addComment,
  getComments,
  removeComment,
  updateComment,
} from "./comment.service";
import { CommentFormType } from "@/service/comment.schema";

export function useGetComments(
  name: BoardName,
  params: Partial<CursorParams> & { id: number }
) {
  return useInfiniteQuery({
    queryKey: [name, params],
    queryFn: ({ pageParam }) =>
      getComments(name, { ...params, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });
}

export function useCommentAdd(name: BoardName, commentId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CommentFormType) => addComment(name, commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [name],
      });
    },
  });
}

export function useCommentModify(name: BoardName, commentId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CommentFormType) => updateComment(commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [name],
      });
    },
  });
}

export function useCommentDelete(name: BoardName, commentId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => removeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [name],
      });
    },
  });
}
