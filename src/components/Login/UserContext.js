import React, { createContext, useReducer, useEffect } from "react";
import { userReducer } from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
