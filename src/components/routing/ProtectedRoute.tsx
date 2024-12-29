import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" replace />;
  }

  return children;
}
