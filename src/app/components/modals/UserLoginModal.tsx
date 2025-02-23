'use client'

import Modal from "../ui/Modal";
import { useUserLogin } from "@/app/hooks/useUserLogin";
import { useState } from "react";
import { redirect } from "next/navigation";

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void; // NEW PROP
}

const UserLoginModal = ({ isOpen, onClose, onSwitchToRegister }: UserLoginModalProps) => {
  const { loginWithQuicc, loginWithGoogle, loginWithApple, loading, error } = useUserLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   // If login is successful, we close the modal
  const handleLoginSuccess = () => {
    onClose();
    redirect("/dashboard");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = loginWithQuicc(formData.email, formData.password, handleLoginSuccess);
    console.log(res);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-100 p-5 rounded-lg w-full max-w-md mx-auto overflow-y-auto">
        <h2 className="text-lg font-bold text-purple-700 text-center">User Login</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block font-medium text-gray-700 text-xs">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 text-xs border border-gray-300 rounded-md"
              placeholder="sample@examplemail.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 text-xs">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 text-xs border border-gray-300 rounded-md"
              placeholder="Enter your password here"
            />
          </div>

          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md text-xs hover:bg-purple-800 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <p className="text-center text-xs text-purple-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </form>

        <div className="mt-4 text-center text-xs text-gray-600">or sign in with</div>

        <div className="flex justify-center space-x-3 mt-3">
          <button
            onClick={loginWithGoogle}
            className="p-2 bg-white border rounded-md shadow-md flex items-center space-x-2 text-xs hover:bg-gray-100 transition"
          >
            <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
            <span>Google</span>
          </button>

          <button
            onClick={loginWithApple}
            className="p-2 bg-white border rounded-md shadow-md flex items-center space-x-2 text-xs hover:bg-gray-100 transition"
          >
            <img src="/icons/apple.svg" alt="Apple" className="h-5 w-5" />
            <span>Apple</span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-600 mt-3">
          Don’t have an account yet?{" "}
          <span 
            className="text-purple-700 cursor-pointer hover:underline"
            onClick={onSwitchToRegister} // SWITCH TO REGISTRATION
          >Create an account</span>
        </p>
      </div>
    </Modal>
  );
};

export default UserLoginModal;
