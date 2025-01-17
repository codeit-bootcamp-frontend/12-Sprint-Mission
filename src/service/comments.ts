import { axiosInstance } from "@service/axios";
import {
  BoardName,
  Comment,
  DeleteCommentResponse,
  CommentList,
} from "@type/comment";
import { CommentFormType } from "@schemas/comment";

export async function getComments(
  name: BoardName,
  { id, limit = 5, cursor }: { id: number; limit?: number; cursor?: number }
) {
  const query = `limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`;
  const response = await axiosInstance.get<CommentList>(
    `/${name}/${id}/comments?${query}`
  );

  return response.data;
}

export async function addComment(
  name: BoardName,
  id: number,
  formData: CommentFormType
) {
  const response = await axiosInstance.post<Comment>(
    `/${name}/${id}/comments`,
    formData
  );

  return response.data;
}

export async function removeComment(commentId: number) {
  const response = await axiosInstance.delete<DeleteCommentResponse>(
    `/comments/${commentId}`
  );

  return response.data;
}

export async function updateComment(
  commentId: number,
  formData: CommentFormType
) {
  const response = await axiosInstance.patch<Comment>(
    `/comments/${commentId}`,
    formData
  );

  return response.data;
}
