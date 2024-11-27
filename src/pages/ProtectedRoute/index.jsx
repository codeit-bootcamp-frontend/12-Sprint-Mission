import { Navigate } from "react-router-dom";
import { useAuth } from "@context/useAuth";

export default function ProtectedRoute({ children }) {
  const {
    auth: { accessToken },
  } = useAuth();

  if (!accessToken) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" replace />;
  }

  return children;
}
