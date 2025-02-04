import { baseURL } from "@/constants";

export default async function createComment(
  articleId: number,
  comment: string
) {
  try {
    const response = await fetch(`${baseURL}/articles/${articleId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });
    if (!response.ok) {
      throw new Error("comment를 생성하는데 실패했습니다.");
    }
    const result = await response.json();
    console.log("Success 댓글:", result);
  } catch (error) {
    console.error("댓글 생성 실패", error);
  }
}
