"use client";

import React, { useState } from "react";
import { Heart, ArrowRight, HelpCircle } from "lucide-react";

const doctorsData = [
  {
    name: "د/ أحمد يوسف",
    specialty: "جلدية",
    location: "القاهرة",
    rating: 5,
    image: "/images/doc2.png",
  },
  {
    name: "د/ ليلى حسن",
    specialty: "نفسي",
    location: "الجيزة",
    rating: 4,
    image: "/images/doc1.png",
  },
  {
    name: "د/ محمد شريف",
    specialty: "أطفال",
    location: "الإسكندرية",
    rating: 5,
    image: "/images/doc3.png",
  },
  {
    name: "د/ فاطمة علي",
    specialty: "نساء",
    location: "المنصورة",
    rating: 4,
    image: "/images/doc1.png",
  },
  {
    name: "د/ سامي عمر",
    specialty: "عظام",
    location: "طنطا",
    rating: 5,
    image: "/images/doc3.png",
  },
  {
    name: "د/ ريم طارق",
    specialty: "مخ وأعصاب",
    location: "أسيوط",
    rating: 5,
    image: "/images/doc1.png",
  },
];

const tabs = [
  "كل التخصصات",
  "جلدية",
  "نفسي",
  "أطفال",
  "نساء",
  "عظام",
  "مخ وأعصاب",
];

export default function Solutions() {
  const [selectedTab, setSelectedTab] = useState("كل التخصصات");

  const filteredDoctors =
    selectedTab === "كل التخصصات"
      ? doctorsData
      : doctorsData.filter((doc) => doc.specialty === selectedTab);

  return (
    <section dir="rtl" className="bg-gray-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          حلول جديدة لرعاية أفضل ليك
        </h2>
        <div className="bg-blue-500 text-white rounded-md p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-white" />
            <p>شامل - وفر حتى 80% على جميع الخدمات الطبية مع شامل</p>
          </div>
          <button className="bg-white text-blue-600 mt-3 md:mt-0 px-4 py-2 rounded-md font-medium">
            معرفة التفاصيل
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-4 flex flex-wrap justify-center gap-2 text-sm">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-1.5 rounded-full border transition ${
              selectedTab === tab
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="text-center md:text-right w-full">
              <h3 className="text-md font-bold text-gray-800">{doc.name}</h3>
              <p className="text-sm text-gray-500">تخصص: {doc.specialty}</p>
              <p className="text-sm text-gray-500">الموقع: {doc.location}</p>
              <div className="flex justify-center md:justify-end gap-1 mt-1">
                {[...Array(doc.rating)].map((_, starIndex) => (
                  <span key={starIndex}>⭐</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ask Doctor Section */}
      <div className="bg-white mt-10 p-6 rounded-md shadow-sm flex flex-col md:flex-row items-center justify-between text-center md:text-right">
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <p className="font-medium text-gray-700">هل لديك سؤال طبي؟</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">
            اسأل دكتور مجانًا، سيتم الرد خلال 24 ساعة
          </p>
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-medium">
            اسأل الآن
          </button>
        </div>
      </div>
    </section>
  );
}
