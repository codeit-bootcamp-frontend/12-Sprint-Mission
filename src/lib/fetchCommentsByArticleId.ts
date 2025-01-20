import { FetchCommentsResponse } from "@/types";

export async function fetchCommentsByArticleId(
  articleId: number,
  limit: number
): Promise<FetchCommentsResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  const url = new URL(`${baseUrl}/articles/${articleId}/comments`);
  url.searchParams.append("limit", String(limit));

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
}
