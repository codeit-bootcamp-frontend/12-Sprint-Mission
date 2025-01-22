import { baseURL } from "@/constants";
import { Post, Posts } from "../types";

export default async function fetchPosts({
  page = "1",
  pageSize = 3,
  orderBy = "recent",
  keyword = "",
}): Promise<Post[]> {
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
    const data: Posts = await response.json();
    return data.list;
  } catch (err) {
    throw new Error(`FetchPosts Error: ${(err as Error).message}`);
  }
}
