import { PostData } from "../types";

export default async function fetchPosts({
  orderBy = "recent",
  pageSize = 3,
}): Promise<PostData[]> {
  const url = `https://panda-market-api.vercel.app/articles?page=1&pageSize=${pageSize}&orderBy=${orderBy}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data.list;
  } catch (err) {
    console.error(err);
    return [];
  }
}
