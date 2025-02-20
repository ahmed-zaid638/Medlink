"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#4FC3F7] text-white py-12 d"
      style={{
        background:
          "linear-gradient(360deg, #4FC3F7 36.51%, #298DB9 76.01%, #0C75A4 100%)",
      }}
    >
      <div className="container mx-auto px-10  [direction:rtl] sm:[direction:ltr]" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <div className="mb-4 space-y-2 ">
              <button className="px-3 py-2 rounded-md  bg-black flex gap-2 items-center w-[160px]">
                <Image
                  src="/icons/google.png"
                  alt="Google Play"
                  width={150}
                  height={45}
                  className="w-auto h-auto"
                />
                <span> Google play</span>
              </button>
              <button className="px-3 py-2 rounded-md  bg-black flex gap-2 items-center  w-[160px]">
                <Image
                  src="/icons/apple.png"
                  alt="Google Play"
                  width={150}
                  height={45}
                  className="w-auto h-auto"
                />
                <span>App store</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="https://x.com" target="_blank">
                <Image
                  src="/icons/x.png"
                  alt="X"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="https://www.facebook.com" target="_blank">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: هل أنت طبيب ؟ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">هل أنت طبيب ؟</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join-doctors" className="hover:underline">
                  انضم إلى أطباء ميدلينك
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: تحتاج المساعدة ؟ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تحتاج المساعدة ؟</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:underline">
                  إرشادات طبية
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  الدعم الفني
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ابحث عن طريق */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ابحث عن طريق</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search?type=specialty" className="hover:underline">
                  التخصص
                </Link>
              </li>
              <li>
                <Link href="/search?type=region" className="hover:underline">
                  المنطقة
                </Link>
              </li>
              <li>
                <Link href="/search?type=hospital" className="hover:underline">
                  المستشفى
                </Link>
              </li>
              <li>
                <Link href="/search?type=center" className="hover:underline">
                  المركز
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: MEDLINK.com */}
          <div>
            <Image
              src="/images/logo-text.png"
              alt="X"
              width={300}
              height={300}
              className="w-[120px]"
            />
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:underline">
                  فروع جديدة
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  وظائف
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:underline">
                  شركاء النجاح
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
