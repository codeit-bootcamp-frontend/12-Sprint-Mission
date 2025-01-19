import { getAccessToken } from "@/utils/tokenHandler";

interface CommentPayload {
  articleId: number;
  content: string;
}

export async function addComment(payload: CommentPayload) {
  const accessToken = getAccessToken();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  if (!accessToken) {
    throw new Error("로그인이 필요합니다");
  }
  const url = new URL(`${baseUrl}/articles/${payload.articleId}/comments`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ content: payload.content }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("댓글 등록 실패:", errorText);
  }

  return response.json();
}
