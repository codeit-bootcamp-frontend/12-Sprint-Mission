import { FetchArticlesResponse } from "@/types";

export async function fetchArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}: {
  page?: number;
  pageSize?: number;
  orderBy?: "like" | "recent";
}): Promise<FetchArticlesResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  const url = new URL(`${baseUrl}/articles`);
  url.searchParams.append("page", String(page));
  url.searchParams.append("pageSize", String(pageSize));
  url.searchParams.append("orderBy", orderBy);
  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return {
      totalCount: 0,
      list: [],
    };
  }
}
