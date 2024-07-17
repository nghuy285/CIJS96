import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const loginStatus = localStorage.getItem("isLogin") === "true";
    if (storedUser && loginStatus) {
      setUser(storedUser);
      setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedLoginStatus = JSON.parse(localStorage.getItem("isLogin"));

    if (savedUser && savedLoginStatus) {
      setUser(savedUser);
      setIsLogin(savedLoginStatus);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [user, isLogin]);
  const loginUser = (user) => {
    setUser(user);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
  };

  const logoutUser = () => {
    setUser(null);
    setIsLogin(false);
    localStorage.removeItem("user");
    localStorage.setItem("isLogin", false);
  };

  return (
    <UserContext.Provider value={{ user, isLogin, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
