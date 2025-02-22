import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// 유저 정보에 있는 토근 이곳에 저장해야함

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const loginTest = () => {
    setIsAuthenticated(true);
  };
  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginTest, token }}>
      {children}
    </AuthContext.Provider>
  );
};
