const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY" as const;
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN_KEY" as const;

export function saveTokens(accessToken: string, refreshToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function getAccessToken() {
  return typeof window !== "undefined" ? localStorage.getItem(ACCESS_TOKEN_KEY) : null;
}

export function getRefreshToken() {
  return typeof window !== "undefined" ? localStorage.getItem(REFRESH_TOKEN_KEY) : null;
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function isAccessTokenExpired(): boolean {
  const accessToken = getAccessToken();
  if (!accessToken) return true;

  try {
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (error) {
    console.error("Access Token 파싱 오류:", error);
    return true;
  }
}
