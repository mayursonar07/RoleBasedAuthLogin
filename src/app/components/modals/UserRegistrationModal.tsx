'use client'

import Modal from "../ui/Modal";
import { useUserRegistration } from "@/app/hooks/useUserRegistration";

interface UserRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const UserRegistrationModal = ({ isOpen, onClose, onSwitchToLogin }: UserRegistrationModalProps) => {
    const {
        formData,
        step,
        loading,
        error,
        setStep,
        handleChange,
        handleCheckboxChange,
        handleRegister,
        handleUpdateUser,
    } = useUserRegistration();

    const handleSkip = () => {
        onClose();
        setStep(1);
      };

  return (
    <Modal isOpen={isOpen} onClose={handleSkip}>
      <div className="bg-[#E8EDED] p-5 rounded-lg w-full max-w-lg md:max-w-md sm:max-w-sm mx-auto z-50 overflow-y-auto">
        <h2 className="text-lg md:text-base font-bold text-purple-700">
          {step === 1 ? "Register as User" : "User registration successful..  Tell us more!"}
        </h2>
        <p className="text-xs md:text-xs text-gray-600 mt-1">
          With more details, we&apos;ll be able to customize the services better for you.
        </p>

        {/* Step 1: Email, Password, Name */}
        {step === 1 && (
          <div className="mt-4 space-y-3">
            <div>
              <label className="block font-medium text-gray-700 text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-xs border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-xs">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 text-xs border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-xs">Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-2 text-xs border border-gray-300 rounded-md"
                placeholder="What should we call you?"
              />
            </div>

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

            <button
                onClick={handleRegister}
                className="w-full bg-purple-700 text-white py-2 rounded-md text-xs hover:bg-purple-800 transition"
            >
            {loading ? (
                <div className="flex items-center justify-center space-x-2">
                <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
                <span>Registering...</span>
                </div>
            ) : (
                "Register"
            )}
            </button>
            <p className="text-center text-xs text-gray-600 mt-3">
              Already have an account?{" "}
              <span 
                className="text-purple-700 cursor-pointer hover:underline"
                onClick={onSwitchToLogin} // SWITCH TO REGISTRATION
              >Sign in</span>
            </p>
          </div>
        )}

        {/* Step 2: Mobile, Address, City, Postal Code, Preferred Communication */}
        {step === 2 && (
          <div className="mt-4 space-y-3">
            <div>
              <label className="block font-medium text-gray-700 text-xs">Mobile Number</label>
              <input
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full p-2 text-xs border border-gray-300 rounded-md"
                placeholder="+91 99999 99999"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-xs">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 text-xs border border-gray-300 rounded-md"
                placeholder="House number / Apartment Name and Street address"
              />
            </div>            

            {/* Preferred Mode of Communication */}
            <div>
              <label className="block font-medium text-gray-700 text-xs">
                Preferred Mode of Communication
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Phone", "Messages", "WhatsApp", "Email"].map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-xs">
                    <input
                      type="checkbox"
                      checked={formData.preferredcontactmethod.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="text-purple-700"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between space-x-2 mt-3">

              <button
                onClick={handleUpdateUser}
                className="w-full bg-purple-700 text-white py-2 rounded-md text-xs hover:bg-purple-800 transition"
              >
                {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                    <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        ></circle>
                        <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                    </svg>
                    <span>Updating Profile...</span>
                    </div>
                ) : (
                    "Update Profile"
                )}
              </button>
            </div>

            {/* Skip Option */}
            <p onClick={handleSkip} className="text-center text-xs text-gray-600 mt-3 cursor-pointer hover:underline">
              Skip for Later
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UserRegistrationModal;
