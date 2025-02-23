'use client'

// import Dashboard from "@/app/components/layout/Dashboard";
import MainLayout from "@/app/components/layout/MainLayout";
import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/");
      } else if (user.role !== "user") {
        router.push("/serviceprovider/dashboard");
      }
    }
  }, [user, loading, router]);


  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <MainLayout>
      <div>User Dashboard Content</div>
    </MainLayout>
  );
};

export default UserDashboard;
