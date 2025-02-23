'use client'

import MainLayout from "@/app/components/layout/MainLayout";
import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const ServiceProviderDashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/");
      } else if (user.role !== "serviceprovider") {
        router.push("/user/dashboard");
      }
    }
  }, [user, loading, router]);


  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <MainLayout>
      <div>Service provider dashboard Content</div>
    </MainLayout>
  );
};

export default ServiceProviderDashboard;
