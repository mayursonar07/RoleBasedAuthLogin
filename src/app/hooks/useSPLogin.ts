import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useSPLogin = () => {
  const { loginForSP } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email & Password Login
  const loginSPWithQuicc = async (email: string, password: string, onSuccess: () => void) => {
    setLoading(true);
    setError(null);
    try {
      const loginSuccess = await loginForSP(email, password);
      if (loginSuccess) {
        onSuccess(); // Close modal on success
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

  return { loginSPWithQuicc, loading, error };
};
