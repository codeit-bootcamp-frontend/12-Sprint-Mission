import { Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" replace />;
  }

  return children;
}
