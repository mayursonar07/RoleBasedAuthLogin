'use client'
// src/app/components/layout/MainLayout.tsx
import { ReactNode, useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Spinner from "../ui/Spinner";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const { loading } = useAuth();
    const [showContent, setShowContent] = useState(false);
  
    useEffect(() => {
      if (!loading) {
        setTimeout(() => {
          setShowContent(true);
        }, 100); // Delay to ensure the spinner is visible for a short time
      }
    }, [loading]);
  
    if (loading) return <Spinner />;
  return (
    <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <HeroSection>{children}</HeroSection>
      <Footer />
    </div>
  );
};

export default MainLayout;
