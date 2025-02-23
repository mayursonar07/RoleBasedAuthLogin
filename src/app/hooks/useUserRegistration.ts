import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";


export const useUserRegistration = () => {
  const { login, registerUser, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    phonenumber: "",
    address: "",
    preferredcontactmethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredcontactmethod: option,
    }));
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await registerUser({
        email: formData.email,
        password: formData.password,
        fullname: formData.fullname,
      });

      console.log("User registered:", response.data);

      const loginSuccess = await login(formData.email, formData.password);
      if (loginSuccess) {
        setStep(2);
      } else {
        setError("Registration successful, but login failed. Please log in manually.");
      }
    } catch {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async () => {
    setLoading(true);
    setError("");
    try {
      await updateUserProfile({
        phonenumber: formData.phonenumber,
        address: formData.address,
        preferredcontactmethod: formData.preferredcontactmethod,
      });

      console.log("User updated successfully");
    } catch {
      setError("Update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    step,
    loading,
    error,
    setStep,
    handleChange,
    handleCheckboxChange,
    handleRegister,
    handleUpdateUser,
  };
};
