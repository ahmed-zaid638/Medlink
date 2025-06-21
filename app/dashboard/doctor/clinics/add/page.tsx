"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function AddClinicPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.address || !form.phone || !form.time) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://your-api-url.com/api/clinics", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("تم إضافة العيادة بنجاح");
      router.push("/dashboard/doctor/clinics");
    } catch (error) {
      toast.error("حدث خطأ أثناء إضافة العيادة");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-[#034796] mb-6">إضافة عيادة جديدة</h1>

      <div className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="اسم العيادة"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="العنوان"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="رقم الهاتف"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="time"
          value={form.time}
          onChange={handleChange}
          placeholder="مواعيد العمل (مثلاً: 10 صباحاً - 5 مساءً)"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#259E6A] text-white px-6 py-2 rounded w-full"
        >
          {loading ? "جاري الإرسال..." : "إضافة العيادة"}
        </button>
      </div>
    </div>
  );
}
