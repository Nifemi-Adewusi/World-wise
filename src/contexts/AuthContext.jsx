/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

const useAuth = function () {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
