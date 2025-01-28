import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/types";
import { clearTokens, getRefreshToken, saveTokens } from "@/utils/tokenHandler";

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/auth/signUp`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("회원가입 실패");
    }

    const result = await response.json();
    // result 안에 { user, accessToken, refreshToken}

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/auth/signIn`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("로그인 실패");
    }

    const result = await response.json();
    // { accessToken, refreshToken } 등의 정보 포함

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function refreshAccessToken(): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }

  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    clearTokens();
    throw new Error("리프레시 토큰을 찾을 수 없습니다");
  }
  const url = new URL(`${baseUrl}/auth/refresh-token`);
  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "토큰 갱신 실패");
    }

    const result = await response.json();
    saveTokens(result.accessToken, result.refreshToken);
  } catch (err) {
    console.error("토큰 갱신 오류:", err);
    clearTokens();
    throw err;
  }
}
