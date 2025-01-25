import { getAccessToken } from "@/utils/tokenHandler";
import { uploadImage } from "./imageService";
import { PostPayload } from "@/types";

export async function createPost(payload: PostPayload) {
  const accessToken = getAccessToken();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  if (!accessToken) {
    throw new Error("로그인이 필요합니다");
  }
  const url = new URL(`${baseUrl}/articles`);

  let imageUrl = null;
  if (payload.image) {
    imageUrl = await uploadImage(payload.image);
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: payload.title,
      content: payload.content,
      ...(imageUrl && { image: imageUrl }),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("게시물 등록 실패:", errorText);
    throw new Error("게시물 등록에 실패했습니다.");
  }

  return response.json();
}
