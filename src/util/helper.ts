import { jwtDecode } from "jwt-decode";

export function isTokenValid(token: string) {
  try {
    const { exp } = jwtDecode(token);
    if (!exp) return false;

    return Date.now() < exp * 1000;
  } catch (err) {
    return false;
  }
}
