// File: app/doctors/[id]/reviews/page.tsx

import { Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../data.json";

export default function DoctorReviews({ params }: { params: { id: string } }) {
  const doctor = data.find((doc) => doc.Id.toString() === params.id);

  if (!doctor) return notFound();

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      date: "March 15, 2023",
      comment:
        "Dr. Johnson is an excellent cardiologist. She took the time to explain my condition and treatment options in detail. Highly recommend!",
    },
    {
      name: "Maria Garcia",
      rating: 5,
      date: "February 3, 2023",
      comment:
        "Very knowledgeable and caring doctor. The staff is also friendly and efficient.",
    },
    {
      name: "Robert Chen",
      rating: 4,
      date: "January 20, 2023",
      comment:
        "Dr. Johnson provided excellent care during my recent heart issues. She's thorough and explains everything clearly.",
    },
  ];

  return (
    <main className="min-h-screen bg-gra-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            آراء المرضى - د. {doctor.FirstName} {doctor.LastName}
          </h1>
          <Link
            href={`/doctors/${doctor.Id}`}
            className="text-blue-600 hover:underline text-sm"
          >
            ← العودة للملف الشخصي
          </Link>
        </div>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 uppercase">
                  {review.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 mr-1 ${
                          i < review.rating
                            ? "fill-yellow-400 stroke-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
