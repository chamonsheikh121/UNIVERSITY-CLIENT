import { current_token } from "@/redux/features/auth/auth_slice";
import { useAppSelector } from "@/redux/hook";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(current_token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
