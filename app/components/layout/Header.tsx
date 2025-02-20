"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const navLinks = [
    { label: "انضم الأن", href: "/register", isButton: true },
    { label: "دخول", href: "/login" },
    { label: "صيدليات للاطباء", href: "/" },
    { label: "اتصل بنا", href: "/" },
    { label: "English", href: "/" },
  ];
  return (
    <header className="flex justify-between items-center p-4 bg-[#4FC3F7] shadow-md  md:px-20">
      <div className="logo">
        <Link href="/" className="flex">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={100}
            width={150}
            className="h-10 w-auto"
          />
          <Image
            src="/images/logo-text.png"
            alt="Logo Text"
            height={100}
            width={150}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <nav className="flex items-center space-x-6 text-lg">
        {navLinks.map(({ label, href, isButton }) => (
          <Link
            key={href}
            href={href}
            className={
              isButton
                ? "text-white hover:text-white border rounded-md px-2 py-1"
                : "text-white hover:text-white"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
