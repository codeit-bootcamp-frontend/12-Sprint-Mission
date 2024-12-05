import { jwtDecode } from "jwt-decode";

export function isTokenValid(token) {
  try {
    const { exp } = jwtDecode(token);
    return Date.now() < exp * 1000;
  } catch (err) {
    return false;
  }
}
