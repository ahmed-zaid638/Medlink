"use client";

import { getRole } from "@/lib/auth";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const role = getRole();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const unauthenticatedNavLinks = [
    { label: "انضم الأن", href: "/register", isButton: true },
    { label: "دخول", href: "/login" },
    { label: "صيدليات للأطباء", href: "/doctors" },
    { label: "اتصل بنا", href: "/contact" },
    { label: "English", href: "/" },
    { label: "الملف الشخصي", href: `/dashboard/${role}/profile` },
  ];

  const authenticatedNavLinks = [
    { label: "لوحة التحكم", href: `/dashboard/${role}` },
    { label: "English", href: "/" },
    { label: "خروج", href: "/logout", isButton: true },
  ];

  const navLinks = isAuthenticated
    ? authenticatedNavLinks
    : unauthenticatedNavLinks;

  return (
    <header className="flex justify-between items-center p-4 bg-[#4FC3F7] shadow-md md:px-20">
      {/* Logo */}
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-lg">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X size={28} color="white" />
        ) : (
          <Menu size={28} color="white" />
        )}
      </button>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#4FC3F7] text-white shadow-md transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-6`}
        onMouseLeave={() => setMenuOpen(false)}
      >
        {navLinks.map(({ label, href, isButton }) => (
          <Link
            key={href}
            href={href}
            className={
              isButton
                ? "text-white hover:text-white border rounded-md px-4 py-2"
                : "text-white hover:text-white text-lg"
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
