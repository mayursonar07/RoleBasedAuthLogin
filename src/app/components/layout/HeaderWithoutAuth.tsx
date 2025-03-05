// src/app/components/layout/HeaderWithoutAuth.tsx
'use client'
import Link from "next/link";

const HeaderWithoutAuth = () => {
  return (
    <header className="bg-white  py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
            <div className="bg-purple-700 text-white p-2 rounded-md">
                <span className="font-bold text-lg">QC</span>
              </div>
        </Link>
      </div>
    </header>
  );
};

export default HeaderWithoutAuth;
