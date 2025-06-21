"use client";

import Link from "next/link";

export default function DoctorHomePage() {
  return (
    <div className="text-right space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">مرحباً بك، دكتور!</h1>
      <p className="text-gray-600">
        هذه هي الصفحة الرئيسية للوحة التحكم الخاصة بك.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold text-gray-700">عدد المرضى</h3>
          <p className="text-2xl text-green-600 font-bold">24</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold text-gray-700">عدد العيادات</h3>
          <p className="text-2xl text-blue-600 font-bold">3</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold text-gray-700">مواعيد اليوم</h3>
          <p className="text-2xl text-yellow-600 font-bold">5</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-x-4">
        <Link href="/dashboard/doctor/clinics/add">
          <button className="bg-[#259E6A] text-white px-4 py-2 rounded">
            إضافة عيادة
          </button>
        </Link>
        <Link href="/dashboard/doctor/patients">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            عرض المرضى
          </button>
        </Link>
        <Link href="/dashboard/doctor/schedule">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            جدول المواعيد
          </button>
        </Link>
      </div>
    </div>
  );
}
