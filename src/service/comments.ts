import { axiosInstance } from "@service/axios";
import { BoardName } from "@type/comment";
import { CommentFormType } from "@schemas/comment";

export async function getComments(
  name: BoardName,
  {
    productId,
    limit = 5,
    cursor,
  }: { productId: number; limit: number; cursor?: number }
) {
  const query = `limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`;
  const response = await axiosInstance.get(
    `/${name}/${productId}/comments?${query}`
  );

  return response.data;
}

export async function addComment(
  name: BoardName,
  id: number,
  formData: CommentFormType
) {
  const response = await axiosInstance.post(
    `/${name}/${id}/comments`,
    formData
  );

  return response.data;
}

export async function removeComment(commentId: number) {
  const response = await axiosInstance.delete(`/comments/${commentId}`);

  return response.data;
}

export async function updateComment(
  commentId: number,
  formData: CommentFormType
) {
  const response = await axiosInstance.patch(
    `/comments/${commentId}`,
    formData
  );

  return response.data;
}
