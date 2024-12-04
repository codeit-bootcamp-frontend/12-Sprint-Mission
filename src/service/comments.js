import axios from "@service/axios";

export async function getComments(name, { productId, limit = 5, cursor }) {
  const query = `limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`;
  const response = await axios.get(`/${name}/${productId}/comments?${query}`);

  return response.data;
}

export async function addComment(name, id, formData) {
  const response = await axios.post(`/${name}/${id}/comments`, formData);

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
