"use client";

import { Search, User, MapPin } from "lucide-react";

const Home = () => {
  const handleClick = () => {
    alert("بحث");
  };

  return (
    <div>
      <main>
        {/* Hero Section with Background Image */}
        <div
          className="relative w-full h-[500px] md:h-[700px] bg-cover bg-center "
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          {/* Search Box UI */}
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md w-[95%] max-w-6xl px-4 py-3 flex flex-wrap gap-2 items-center justify-between">
            {/* Search Heading */}
            <div className="w-full text-end pr-2 text-[#007EA6] font-bold text-lg flex items-center gap-1 justify-end">
              <Search className="w-5 h-5" />
              <span>احجز دكتور</span>
            </div>

            {/* Input Row */}
            <div className="flex flex-wrap gap-2 w-full justify-between items-center mt-2">
              {/* Search Field */}
              <div className="flex-1 min-w-[150px] border border-gray-300 rounded-md px-3 py-2 flex items-center gap-1 text-sm">
                <User className="text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="اكتب اسم الدكتور او المستشفى"
                  className="w-full outline-none bg-transparent text-end"
                />
              </div>

              {/* Specialization Dropdown */}
              <div className="flex-1 min-w-[150px] border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600">
                <select className="bg-transparent outline-none text-end w-full">
                  <option>اختر التخصص</option>
                </select>
              </div>

              {/* Governorate Dropdown */}
              <div className="flex-1 min-w-[150px] border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600">
                <select className="bg-transparent outline-none text-end w-full">
                  <option>اختر المحافظة</option>
                </select>
              </div>

              {/* Region Dropdown */}
              <div className="flex-1 min-w-[150px] border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600">
                <select className="bg-transparent outline-none text-end w-full">
                  <option>اختر المنطقة</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                onClick={handleClick}
                className="bg-red-600 text-white px-5 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-red-700"
              >
                <Search className="w-4 h-4" />
                <span>ابحث</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
