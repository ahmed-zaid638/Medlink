"use client";
import { setRole, setToken } from "@/lib/auth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    specialityId: "",
  });

  const [specialities, setSpecialities] = useState([]);
  const [specialityLoading, setSpecialityLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const logos = [
    "/icons/google2.png",
    "/icons/gmail.png",
    "/icons/facebook2.png",
  ];

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const res = await axios.get(
          "https://medlink.runasp.net/api/Specialities"
        );
        setSpecialities(res.data.data || []);
      } catch (err) {
        toast.error("فشل تحميل التخصصات");
      } finally {
        setSpecialityLoading(false);
      }
    };
    fetchSpecialities();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(
        "http://medlink.runasp.net/Auth/User/SignUp",
        {
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Password: formData.password,
          ConfirmPassword: formData.confirmPassword,
          SpecialityId: formData.specialityId
            ? parseInt(formData.specialityId)
            : undefined,
        }
      );
      setToken(res.data.data.token);
      setRole("doctor");
      toast.success("تم التسجيل بنجاح!");
      router.push("/dashboard/doctor");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        specialityId: "",
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
                htmlFor="specialityId"
              >
                التخصص
              </label>
              <select
                id="specialityId"
                value={formData.specialityId}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">اختر التخصص</option>
                {specialityLoading ? (
                  <option disabled>جاري التحميل...</option>
                ) : (
                  specialities.map((spec: any) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.name}
                    </option>
                  ))
                )}
              </select>
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

            <div>
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
