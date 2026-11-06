"use client";

import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FarmerLayout({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("gt_session") || "null");

    if (!session || session.role !== "farmer") {
      router.replace("/login/farmer");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return <div className="p-10">Loading dashboard...</div>;

  return (
    <div className="md:flex min-h-screen bg-[#f4f7f1]">
      <Sidebar role="farmer"/>

      <main className="flex-1 min-w-0 p-4 md:p-8">
        <DashboardHeader role="farmer"/>
        {children}
      </main>
    </div>
  );
}
