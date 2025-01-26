import { refreshAccessToken } from "@/services/authService";
import { clearTokens, getAccessToken, isAccessTokenExpired } from "./tokenHandler";

/**
 * 공통 API 요청 함수
 * Access Token의 만료 여부를 확인하고, 만료 시 Refresh Token을 사용하여 토큰을 갱신한 후 요청을 재시도합니다.
 *
 * @param input - 요청 URL 또는 Request 객체
 * @param init - 요청 초기화 옵션
 * @returns 응답 객체
 */
export async function authenticatedFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
  if (isAccessTokenExpired()) {
    await refreshAccessToken();
  }

  let accessToken = getAccessToken();

  const authInit: RequestInit = {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  };

  let response = await fetch(input, authInit);

  if (response.status === 401) {
    try {
      await refreshAccessToken();
      accessToken = getAccessToken();

      const retryInit: RequestInit = {
        ...init,
        headers: {
          "Content-Type": "application/json",
          ...(init?.headers || {}),
          Authorization: `Bearer ${accessToken}`,
        },
      };

      response = await fetch(input, retryInit);
    } catch (err) {
      clearTokens();
      window.location.href = "/login";
      throw new Error("토큰 갱신 실패. 다시 로그인해주세요.");
    }
  }

  return response;
}
