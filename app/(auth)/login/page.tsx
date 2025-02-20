"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  const [countryCode, setCountryCode] = useState("+20");
  const logos = [
    "/icons/google2.png",
    "/icons/gmail.png",
    "/icons/facebook2.png",
  ];

  return (
    <div dir="rtl" className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded w-full max-w-md">
        {/* Header / Gradient Bar */}
        <div
          className="text-white text-center py-2 font-bold"
          style={{
            background:
              "linear-gradient(360deg, #4FC3F7 36.51%, #298DB9 76.01%, #0C75A4 100%)",
          }}
        >
          تسجيل الدخول
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#023856]">
            تسجيل الدخول
          </h1>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-[#034796] font-bold mb-1" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              placeholder="ادخل البريد الإلكتروني الخاص بك"
              className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Field (optional) */}
          <div className="mb-4">
            <label className="block text-[#034796] font-bold mb-1" htmlFor="phone">
              رقم المحمول
            </label>
            <div className="relative">
              <input
                id="phone"
                type="text"
                placeholder="ادخل رقم المحمول الخاص بك"
                className="w-full border border-blue-200 rounded px-3 py-2 pl-[5.5rem] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-[#034796] font-bold mb-1" htmlFor="password">
              كلمة السر
            </label>
            <input
              id="password"
              type="password"
              placeholder="ادخل كلمة السر الخاصة بك"
              className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              className="w-[60%] bg-[#1B81AE] text-white font-semibold py-2 rounded"
            >
              تسجيل الدخول
            </button>
          </div>

          {/* Social Login */}
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

          {/* Switch to Sign Up */}
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
