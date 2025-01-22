import { baseURL } from "@/constants";
import { PostData, PostListData } from "../types";

export default async function fetchPosts({
  page = "1",
  pageSize = 3,
  orderBy = "recent",
  keyword = "",
}): Promise<PostData[]> {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    keyword,
  });
  const url = `${baseURL}/articles?${params.toString()}`;

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
