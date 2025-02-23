import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export const useUserLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email & Password Login
  const loginWithQuicc = async (email: string, password: string, handleLoginSuccess: () => void) => {
    setLoading(true);
    setError(null);
    try {
      const loginSuccess = await login(email, password);
      if (loginSuccess) {
        handleLoginSuccess(); // Close modal on success
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth Login
  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/auth/google");
      console.log("Google login successful:", response.data);
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Apple OAuth Login
  const loginWithApple = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/auth/apple");
      console.log("Apple login successful:", response.data);
    } catch (error) {
      console.error("Apple login failed:", error);
      setError("Apple login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loginWithQuicc, loginWithGoogle, loginWithApple, loading, error };
};
