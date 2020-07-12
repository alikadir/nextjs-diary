import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const ApplicationContextProvider = props => {
  const [user, setUser] = useState({ username: "alikadir", role: "admin" });

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        changeUser: user => {
          setUser(user);
        },
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
