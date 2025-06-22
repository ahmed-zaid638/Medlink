// File: app/doctors/[id]/reports/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, Download } from "lucide-react";
import data from "../../data.json";

export default function DoctorReports({ params }: { params: { id: string } }) {
  const doctor = data.find((doc) => doc.Id.toString() === params.id);

  if (!doctor) return notFound();

  const reports = [
    {
      id: 1,
      title: "Lab Results - Blood Test",
      date: "2023-11-12",
      fileUrl: "/reports/lab-blood-test.pdf",
    },
    {
      id: 2,
      title: "Prescription - Hypertension",
      date: "2023-10-04",
      fileUrl: "/reports/prescription-hypertension.pdf",
    },
    {
      id: 3,
      title: "Visit Summary - General Checkup",
      date: "2023-09-20",
      fileUrl: "/reports/visit-summary.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            تقارير الدكتور {doctor.FirstName} {doctor.LastName}
          </h1>
          <Link
            href={`/doctors/${doctor.Id}`}
            className="text-blue-600 hover:underline text-sm"
          >
            ← العودة للملف الشخصي
          </Link>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between bg-white border border-gray-200 shadow-sm rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <FileText className="text-blue-600 h-6 w-6" />
                <div>
                  <p className="font-semibold text-gray-800">{report.title}</p>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
              </div>
              <a
                href={report.fileUrl}
                download
                className="inline-flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md"
              >
                <Download className="h-4 w-4 mr-2" />
                تحميل التقرير
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
