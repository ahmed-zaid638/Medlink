import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function DoctorSchedule({ params }: { params: { id: string } }) {
  const doctorId = params.id;

  const schedule = [
    { day: "Monday", times: ["9:00 AM", "10:00 AM", "2:00 PM"] },
    { day: "Tuesday", times: ["11:00 AM", "3:00 PM"] },
    { day: "Wednesday", times: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    { day: "Thursday", times: ["9:00 AM", "12:00 PM"] },
    { day: "Friday", times: [] },
    { day: "Saturday", times: ["10:00 AM", "12:00 PM"] },
    { day: "Sunday", times: [] },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-600 flex items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/doctors" className="hover:text-blue-600">
            Doctors
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href={`/doctors/${doctorId}`} className="hover:text-blue-600">
            Profile
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-gray-900">Schedule</span>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="text-blue-600" />
          Doctor Schedule
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((slot, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-5 border">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {slot.day}
              </h2>

              {slot.times.length > 0 ? (
                <ul className="space-y-2">
                  {slot.times.map((time, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Clock className="w-4 h-4 text-blue-500" />
                      {time}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">No appointments available</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
