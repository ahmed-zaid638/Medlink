export const setToken = (token: string) => {

  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const clearToken = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
