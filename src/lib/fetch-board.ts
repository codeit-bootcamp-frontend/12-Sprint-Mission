import { Review } from "../../types";

const fetchBoard = async (id: number): Promise<Review | null> => {
  const url = `https://panda-market-api.vercel.app/articles/${id}`;
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

export default fetchBoard;
