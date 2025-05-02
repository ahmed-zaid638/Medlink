"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/auth";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const logos = [
    "/icons/google2.png",
    "/icons/gmail.png",
    "/icons/facebook2.png",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://medlink.runasp.net/Auth/User/Login",
        {
          Email: formData.email,
          Password: formData.password,
        }
      );

      setToken(res.data.data.token);

      toast.success("تم تسجيل الدخول بنجاح!");
      router.push("/"); // redirect to homepage or dashboard
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center min-h-[90vh] bg-gray-100"
    >
      <div className="bg-white shadow-md rounded w-full max-w-md">
        <div
          className="text-white text-center py-2 font-bold"
          style={{
            background:
              "linear-gradient(360deg, #4FC3F7 36.51%, #298DB9 76.01%, #0C75A4 100%)",
          }}
        >
          تسجيل الدخول
        </div>

        <div className="px-8 py-8">
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#023856]">
            تسجيل الدخول
          </h1>

          <div className="mb-4">
            <label
              className="block text-[#034796] font-bold mb-1"
              htmlFor="email"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ادخل البريد الإلكتروني الخاص بك"
              className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-[#034796] font-bold mb-1"
              htmlFor="password"
            >
              كلمة السر
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="ادخل كلمة السر الخاصة بك"
              className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-[60%] bg-[#1B81AE] text-white font-semibold py-2 rounded hover:bg-[#166d91] transition"
            >
              {loading ? "جاري الدخول..." : "تسجيل الدخول"}
            </button>
          </div>

          <div className="text-center my-4">
            <span className="text-gray-500">أو قم بتسجيل الدخول بـ</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            {logos.map((img, index) => (
              <button key={index} className="rounded p-2 hover:bg-gray-100">
                <Image src={img} alt={`Image ${img}`} width={24} height={24} />
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-700">ليس لديك حساب؟ </span>
            <Link href="/register" className="text-blue-600 hover:underline">
              انضم الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
