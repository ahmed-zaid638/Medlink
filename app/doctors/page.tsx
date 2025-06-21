import Image from "next/image";
import Link from "next/link";
import data from "./data.json";

export default function DoctorsPage() {
  const specialties = [
    "Cardiology",
    "Pediatrics",
    "General Surgery",
    "Dermatology",
    "Neurology",
    "Gynecology",
    "Orthopedics",
    "Internal Medicine",
    "Psychiatry",
    "Ophthalmology",
    "ENT",
    "Pathology",
    "Endocrinology",
    "Rheumatology",
    "Nephrology",
    "Hematology",
    "Gastroenterology",
    "Family Medicine",
    "Pulmonology",
    "Oncology",
    "Radiology",
    "Anesthesiology",
    "Dentistry",
    "Urology",
    "Plastic Surgery",
    "Vascular Surgery",
    "Fertility",
  ];

  const doctors = data.map((doctor) => ({
    id: doctor.Id,
    name: `Dr. ${doctor.FirstName} ${doctor.LastName}`,
    specialty: specialties[(doctor.SpecialityId || 1) - 1] || "General",
    image: `/images/doctors/${(doctor.Id)}.jpg`, // Sample image path
    rating: doctor.Rate || 4.0,
    reviewCount: Math.floor(Math.random() * 100) + 30,
    location: "Cairo, Egypt",
    available: doctor.Id % 2 === 0, // Simulated availability
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="bg-gradient-to-r from-[#4fc3f7] to-[#4fc3f7] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find the Right Doctor
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse our network of experienced medical professionals and book an
            appointment today
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by doctor name or specialty"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="flex-1">
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>All Specialties</option>
                {specialties.map((specialty, index) => (
                  <option key={index}>{specialty}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>All Locations</option>
                <option>Cairo, Egypt</option>
                <option>Giza, Egypt</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-4">Filters</h2>

              <div className="mb-4 border-t pt-4">
                <h3 className="font-semibold mb-2">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Available Today
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Available This Week
                  </label>
                </div>
              </div>

              <div className="mb-4 border-t pt-4">
                <h3 className="font-semibold mb-2">Rating</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 4+ Stars
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 5 Stars
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  href={`/doctors/${doctor.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-60 object-cover"
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{doctor.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {doctor.specialty}
                    </p>
                    <div className="text-yellow-500 mb-2">
                      ★ {doctor.rating.toFixed(1)} ({doctor.reviewCount} reviews)
                    </div>
                    <p className="text-sm text-gray-600">{doctor.location}</p>
                    <span
                      className={`inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        doctor.available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {doctor.available ? "Available Now" : "Not Available"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
