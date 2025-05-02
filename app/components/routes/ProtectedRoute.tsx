// components/ProtectedRoute.tsx
"use client";

import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
