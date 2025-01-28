import { getAccessToken } from "@/utils/tokenHandler";
import { uploadImage } from "./imageService";
import { PostPayload } from "@/types";
import { authenticatedFetch } from "@/utils/requestHandler";

export async function createPost(payload: PostPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  const url = new URL(`${baseUrl}/articles`).toString();

  let imageUrl = null;
  if (payload.image) {
    imageUrl = await uploadImage(payload.image);
  }

  try {
    const response = await authenticatedFetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: payload.title,
        content: payload.content,
        ...(imageUrl && { image: imageUrl }),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "게시물 등록 실패");
    }

    return response.json();
  } catch (err) {
    console.error("게시물 등록 오류:", err);
    throw err;
  }
}
