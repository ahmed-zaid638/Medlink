"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/auth";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
        "http://medlink.runasp.net/Auth/User/SignUp",
        {
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Password: formData.password,
          ConfirmPassword: formData.confirmPassword,
        }
      );
      console.log(res);
      setToken(res.data.data.token);
      toast.success("تم التسجيل بنجاح!");
      router.push("/dashboad");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      const errors = error?.response?.data?.errors;
      if (errors) {
        Object.entries(errors).forEach(([field, messages]) => {
          (messages as string[]).forEach((msg) => toast.error(msg));
        });
      } else {
        toast.error("حدث خطأ أثناء التسجيل");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center min-h-[90vh] bg-gray-100"
    >
      <div className="bg-white shadow-md rounded w-full max-w-3xl">
        <div
          className="text-white text-center py-2 font-bold"
          style={{
            background:
              "linear-gradient(360deg, #4FC3F7 36.51%, #298DB9 76.01%, #0C75A4 100%)",
          }}
        >
          انضم الأن
        </div>
        <div className="px-8 py-8">
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#023856]">
            سجل الان
          </h1>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                className="block text-[#034796] font-bold mb-1"
                htmlFor="name"
              >
                الاسم
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="ادخل اسمك الكامل"
                className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
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

            <div>
              <label
                className="block text-[#034796] font-bold mb-1"
                htmlFor="phone"
              >
                رقم المحمول
              </label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="ادخل رقم المحمول الخاص بك"
                className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
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

            <div className="md:col-span-1">
              <label
                className="block text-[#034796] font-bold mb-1"
                htmlFor="confirmPassword"
              >
                تأكيد كلمة السر
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="أعد إدخال كلمة السر"
                className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-[60%] bg-[#1B81AE] text-white font-semibold py-2 rounded hover:bg-[#166d91] transition"
            >
              {loading ? "جاري التسجيل..." : "سجل الان"}
            </button>
          </div>

          <div className="text-center my-4">
            <span className="text-gray-500">أو قم بالتسجيل بـ</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            {logos.map((img, index) => (
              <button key={index} className="rounded p-2 hover:bg-gray-100">
                <Image src={img} alt={`Image ${img}`} width={24} height={24} />
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-700">هل لديك حساب بالفعل؟ </span>
            <Link href="/login" className="text-blue-600 hover:underline">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
