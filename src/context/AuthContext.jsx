import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: JSON.parse(localStorage.getItem("user")) || null, // Load user data from localStorage if available
    token: localStorage.getItem("authToken") || null, // Load token from localStorage if available
  });


  const login = (user, token) => {
    setAuth({ user, token });
    // Optionally, store token and user data in localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user)); // Store user info
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    // Optionally, clear token and user data from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    window.location.href = "/"; // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
