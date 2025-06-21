"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, setToken, clearToken } from "@/lib/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("auth mouned");
  const [isAuthenticatedState, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (token) setIsAuthenticated(true);
  }, []);

  const login = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
    router.push("/dashboard");
  };

  const logout = () => {
    clearToken();
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticatedState, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};


type Status = "processing" | "success" | "error";
