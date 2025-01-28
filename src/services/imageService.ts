import { authenticatedFetch } from "@/utils/requestHandler";
import { getAccessToken } from "@/utils/tokenHandler";

export async function uploadImage(image: File): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/images/upload`).toString();

  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await authenticatedFetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("이미지 업로드 실패:", errorText);
      throw new Error("이미지 업로드에 실패했습니다.");
    }

    const result = await response.json();
    return result.url;
  } catch (err) {
    console.error("이미지 업로드 오류:", err);
    throw err;
  }
}
