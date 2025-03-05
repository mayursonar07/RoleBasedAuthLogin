'use client'

import { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import UserRegistrationModal from "../modals/UserRegistrationModal";
import SPRegistrationModal from "../modals/SPRegistrationModal";
import { useAuth } from "../../context/AuthContext";
import UserLoginModal from "../modals/UserLoginModal";
import SPLoginModal from "../modals/SPLoginModal";

const Header = () => {
  const { user, loading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isUserLoginModalOpen, setUserLoginModalOpen] = useState(false);
  const [isSPRegisterModalOpen, setIsSPRegisterModalOpen] = useState(false);
  const [isSPLoginModalOpen, setIsSPLoginModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const openRegister = () => {
    setIsRegisterModalOpen(true);
    setUserLoginModalOpen(false);
  };
  const openLogin = () => {
    setIsRegisterModalOpen(false);
    setUserLoginModalOpen(true);
  };
  const openSPRegister = () => {
    setIsSPRegisterModalOpen(true);
    setIsSPLoginModalOpen(false);
  };
  const openSPLogin = () => {
    setIsSPRegisterModalOpen(false);
    setIsSPLoginModalOpen(true);
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout("user11@sample.com");
  };

  useEffect(() => {
    const handleClickOutside =(event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <>
    <nav className="absolute top-0 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left - App Logo */}
          
            <a className="flex items-center space-x-2">
              <div className="bg-purple-700 text-white p-2 rounded-md">
                <span className="font-bold text-lg">QC</span>
              </div>
            </a>
          

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-purple-700 hover:bg-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Show Register Button Only If No User is Logged In */}
            {!user && (
              <>
                
                <div className="relative" ref={dropdownRef}>
                  {/* <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                      Login
                  </button> */}
                  <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                      <FaUserCircle className="text-purple-700 text-2xl" />
                      <IoMdArrowDropdown className="text-purple-700" />
                  </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <>
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent from closing dropdown
                            setUserLoginModalOpen(true);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left text-sm rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          User login
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent from closing dropdown
                            setIsSPLoginModalOpen(true);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left text-sm rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Service Provider login
                        </button>
                    </div>
                    
                    </>
                )}
                </div>
              </>
            )}

            {/* Show Profile Dropdown If User is Logged In */}
            {user && (
              <>
                Welcome {user.fullname}
                <div className="relative" ref={dropdownRef}>
                  
                  <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                      <FaUserCircle className="text-purple-700 text-2xl" />
                      <IoMdArrowDropdown className="text-purple-700" />
                  </button>
                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                      <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Profile
                      </a>
                      <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Settings
                      </a>
                      <a href="#" onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Logout
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Options side bar */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t mt-2 py-4 px-4 shadow-md">
            {!user && (
              <>
                <div>
                <button className="block border w-full px-4 py-2 rounded-md"
                    onClick={() => { setUserLoginModalOpen(true); setMenuOpen(!menuOpen);}}>
                    Login as User
                </button>
                </div>
                <div className="mt-2">
                 <button className="block border w-full px-4 py-2 rounded-md"
                    onClick={() => { setIsSPLoginModalOpen(true); setMenuOpen(!menuOpen);}}>
                    Login as Service provider
                </button>
                </div>
              </>
            )}

            {/* Mobile - Profile Dropdown */}
            {user && (
              <div className="mt-2 w-full">
                  <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                  </a>
                  <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                  </a>
                  <a href="#" onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                  </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
    {/* Render Modal */}
    <UserRegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} onSwitchToLogin={openLogin}/>
    <UserLoginModal isOpen={isUserLoginModalOpen} onClose={() => setUserLoginModalOpen(false)} onSwitchToRegister={openRegister} />
    <SPRegistrationModal isOpen={isSPRegisterModalOpen} onClose={() => setIsSPRegisterModalOpen(false)} onSwitchToLogin={openSPLogin} />
    <SPLoginModal isOpen={isSPLoginModalOpen} onClose={() => setIsSPLoginModalOpen(false)} onSwitchToRegister={openSPRegister} />
    </>
  );
};

export default Header;