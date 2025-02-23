'use client'
// import AIAssistant from "./components/layout/AIAssistant";
import MainLayout from "./components/layout/MainLayout";
import WelcomeText from "./components/layout/WelcomeText";
import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // We redirect to the user/dashboard or serviceprovider/dashboard based on the user role
  // We only render this page if the user/serviceprovider is not logged in
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/");
      } else if (user.role === "serviceprovider") {
        router.push("/serviceprovider/dashboard");      
      } else if (user.role === "user") {
        router.push("/user/dashboard");
      }
    }
  }, [user, loading, router]);

  return (
    <>
    <MainLayout>
      <WelcomeText/>
      {/* <AIAssistant/> */}
      
    </MainLayout>
    </>
  );
}
