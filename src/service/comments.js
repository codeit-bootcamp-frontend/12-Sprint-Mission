import axios from "@service/axios";

export async function getProductComments({ productId, limit = 5, cursor }) {
  const query = `limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`;
  const response = await axios.get(`/products/${productId}/comments?${query}`);

  return response.data;
}

export async function addProductComment(productId, formData) {
  const response = await axios.post(
    `/products/${productId}/comments`,
    formData
  );

  return response.data;
}

export async function removeComment(commentId) {
  const response = await axios.delete(`/comments/${commentId}`);

  return response.data;
}

export async function updateComment(commentId, formData) {
  const response = await axios.patch(`/comments/${commentId}`, formData);

  return response.data;
}
