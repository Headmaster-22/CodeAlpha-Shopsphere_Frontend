import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../api";

export const AuthContext = createContext({
  isAuthenticated: false,
  username: "",
  setIsAuthenticated: () => {},
  get_username: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  // Check if the access token is valid
  const handleAuth = () => {
    const token = localStorage.getItem("access");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const expiryDate = decoded.exp;
        const currentTime = Date.now() / 1000;

        if (expiryDate >= currentTime) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Invalid token:", err);
        setIsAuthenticated(false);
      }
    }
  };

  // Fetch the username from API
  const get_username = async () => {
    try {
      const res = await api.get("get_username");
      setUsername(res.data.username);
    } catch (err) {
      console.error("Failed to fetch username:", err.message);
    }
  };

  useEffect(() => {
    handleAuth();
    get_username();
  }, []);

  const authValue = {
    isAuthenticated,
    username,
    setIsAuthenticated,
    get_username,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
