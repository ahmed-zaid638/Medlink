"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainWrapper({ children }: Props) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <main
      className={`min-h-[59vh] bg-[#F5F5F5] ${
        isHome ? "" : "p-4 md:px-20"
      }`}
    >
      {children}
    </main>
  );
}
