import React from "react";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 ">{children}</main>
    </div>
  );
}
