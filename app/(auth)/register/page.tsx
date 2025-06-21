"use client";

import { useRouter } from "next/navigation";
import { FaUser, FaUserMd } from "react-icons/fa";

export default function RegisterChoicePage() {
  const router = useRouter();

  const handleChoose = (role: "user" | "doctor") => {
    router.push(role === "user" ? "/register-user" : "/register-doctor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">من أنت؟</h1>
        <p className="text-gray-500 mb-4">اختر نوع الحساب الذي تريد إنشاءه</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* User Card */}
          <div
            onClick={() => handleChoose("user")}
            className="cursor-pointer flex-1 bg-white border-2 border-green-500 hover:bg-green-50 hover:shadow-lg transition-all rounded-xl p-6 space-y-3 text-right"
          >
            <FaUser className="text-green-600 text-4xl mx-auto mb-2" />
            <h2 className="text-xl font-semibold text-gray-700">مستخدم عادي</h2>
            <p className="text-gray-500 text-sm">
              للبحث عن الأطباء وحجز المواعيد
            </p>
          </div>

          {/* Doctor Card */}
          <div
            onClick={() => handleChoose("doctor")}
            className="cursor-pointer flex-1 bg-white border-2 border-blue-500 hover:bg-blue-50 hover:shadow-lg transition-all rounded-xl p-6 space-y-3 text-right"
          >
            <FaUserMd className="text-blue-600 text-4xl mx-auto mb-2" />
            <h2 className="text-xl font-semibold text-gray-700">دكتور</h2>
            <p className="text-gray-500 text-sm">
              لإدارة ملفك الطبي والتواصل مع المرضى
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
