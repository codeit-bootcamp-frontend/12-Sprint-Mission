import { authenticatedFetch } from "@/utils/requestHandler";

interface CommentPayload {
  articleId: number;
  content: string;
}

export async function addComment(payload: CommentPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  const url = new URL(`${baseUrl}/articles/${payload.articleId}/comments`).toString();
  try {
    const response = await authenticatedFetch(url, {
      method: "POST",
      body: JSON.stringify({ content: payload.content }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "댓글 작성 실패");
    }

    return response.json();
  } catch (error) {
    console.error("댓글 작성 오류:", error);
    throw error;
  }
}
