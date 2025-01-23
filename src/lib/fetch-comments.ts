import { CommentListResponse } from "../../types";

const fetchComments = async (
  id: number
): Promise<CommentListResponse | null> => {
  const url = `https://panda-market-api.vercel.app/articles/${id}/comments?limit=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default fetchComments;
