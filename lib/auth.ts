export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const clearToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const setRole = (role: "doctor" | "user") => {
  if (typeof window !== "undefined") {
    localStorage.setItem("role", role);
  }
};

export const getRole = (): "doctor" | "user" | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("role") as "doctor" | "user" | null;
  }
  return null;
};

export const clearRole = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("role");
  }
};
