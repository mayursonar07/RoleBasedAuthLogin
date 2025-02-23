import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";


export const useSPRegistration = () => {
  const { loginForSP, registerSP, updateSPProfile  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    businessname: "",
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
      const response = await registerSP({
        email: formData.email,
        password: formData.password,
        fullname: formData.fullname,
        businessname: formData.businessname,
      });

      if (response.status !== 200) {
        setError("Registration failed. Try again.");
        return;
      }
      console.log("Service Provider registered:", response);

      const loginSuccess = await loginForSP(formData.email, formData.password);
      if (loginSuccess) {
        // setStep(2);
        setLoading(false);
      } else {
        setError("Registration successful, but login failed. Please log in manually.");
      }
    } catch {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSP = async () => {
    setLoading(true);
    setError("");
    try {
      await updateSPProfile({
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
    handleUpdateSP,
  };
};
