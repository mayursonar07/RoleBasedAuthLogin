'use client'

import { createContext, useContext, useEffect, useState } from "react";
import api from "@/app/utils/axiosInstance";
import { User, AuthContextType, RegisterUserData, UpdateUserData, RegisterSPData, ChatResponse, RegisterAPIResponse } from "../../types/authTypes";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // This useEffect is to check persisted user data on page load/refresh
  useEffect(() => {
    // TEMPORARY SESSION PERSISTENCE (To be replaced by `/auth/me` when available)
    const storedUser = Cookies.get('user');
    // const storedToken = Cookies.get('token');
    
    if (storedUser != undefined ) {
      setUser(JSON.parse(storedUser));
      // api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    setLoading(false);
    // FUTURE: Replace with `/auth/me` when available
    // const getCurrentUser = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     if (!token) return;
    //     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //     const response = await api.get("/auth/me");
    //     setUser(response.data.user);
    //   } catch (error) {
    //     console.log("Session expired, please log in again.");
    //     setUser(null);
    //   }
    // };
    // getCurrentUser();
  }, []);

  // LOGIN FUNCTION (Uses `verify-user` API)
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // const response = await loginUser(email, password);
      const response = await api.post("/verify-user", { email, password });
      if (!response) {
        throw new Error("Login failed");
      }
      const userLoginDetails = {...response.data.data, role: "user"};

      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(user));
      Cookies.set('user', JSON.stringify(userLoginDetails));
      setUser(userLoginDetails);
      
      // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      router.push("/user/dashboard"); // Redirect after login
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // LOGIN as Service provider FUNCTION (Uses `verify-provider` API)
  const loginForSP = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await api.post("/verify-provider", { email, password });
      if (!response) {
        throw new Error("Login failed");
      }
      const spLoginDetails = {...response.data.data, role: "serviceprovider"};

      // localStorage.setItem("token", token);
      // localStorage.setItem("serviceProvider", JSON.stringify(serviceProvider));
      Cookies.set('user', JSON.stringify(spLoginDetails));
      setUser(spLoginDetails);
      
      // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      router.push("/serviceprovider/dashboard");
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const updateUserProfile = async (profileData: UpdateUserData): Promise<boolean> => {
    try {
      await api.put("/update-user-details", profileData);
      return true;
    } catch (error) {
      console.error("Update user profile failed:", error);
      return false;
    }
  };
  const updateSPProfile = async (profileData: UpdateUserData): Promise<boolean> => {
    try {
      await api.put("/update-service-provider-details", profileData);
      return true;
    } catch (error) {
      console.error("Update service provider profile failed:", error);
      return false;
    }
  };

  const registerUser = async (userData: RegisterUserData): Promise<RegisterAPIResponse> => {
    const response = await api.post("/register-user", userData);
    return response.data;
  };
  
  const registerSP = async (serviceProviderData: RegisterSPData): Promise<RegisterAPIResponse> => {
    const response = await api.post("/register-service-provider", serviceProviderData);
    return response.data;
  };

  const callChatService = async (message: string): Promise<ChatResponse> => {
    const response = await api.post("/chat", { email: "user11@sample.com", message: message });
    return response.data;
  };

  // LOGOUT FUNCTION
  const logout = async (email: string): Promise<void> => {
    try {
      const response = await api.post("/logout", {email: email});
      if (!response) {
        throw new Error("Logout failed");
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      Cookies.remove('user');
      setUser(null);
      router.push("/"); // Redirect to homepage
  
    } catch (error) {
      console.error("Logout failed:", error);
    }
    
  };

  return (
    <AuthContext.Provider value={
      { user, loading, callChatService, registerUser, registerSP, login, loginForSP, updateUserProfile, updateSPProfile, logout }
    }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
