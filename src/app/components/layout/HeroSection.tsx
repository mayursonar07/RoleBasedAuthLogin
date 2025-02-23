'use client'

import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <div className=" w-full -z-10 min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center">
        <Image
          src="/background-image1.jpg" // Update with actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Content Inside the Hero Section */}
      <div className="relative z-10 w-full max-w-3xl">{children}</div>
    </div>
  );
};

export default HeroSection;
