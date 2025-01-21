import { PostData, PostListData } from "../types";

export default async function fetchPosts({
  page = "1",
  pageSize = 3,
  orderBy = "recent",
  keyword = "",
}): Promise<PostData[]> {
  const url = `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch, ${response.statusText}`);
    }
    const data: PostListData = await response.json();
    return data.list;
  } catch (err) {
    console.error(err);
    return [];
  }
}
