"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearToken } from "@/lib/auth";
import toast from "react-hot-toast";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    clearToken();
    toast.success("تم تسجيل الخروج بنجاح");
    router.push("/login");
  }, [router]);

  return <p className="text-center mt-10">جارٍ تسجيل الخروج...</p>;
};

export default LogoutPage;
