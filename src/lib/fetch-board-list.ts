import { Article, BoardListResponse } from "../../types";

export default async function fetchBoardList(
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = ""
): Promise<Article[]> {
  const url = `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    const data: BoardListResponse = await response.json();
    return data.list;
  } catch (err) {
    console.error(err);
    return [];
  }
}
