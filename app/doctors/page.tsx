import Link from "next/link";

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "/images/sample1.jpg", // Real image from Unsplash
      rating: 4.9,
      reviewCount: 124,
      location: "New York, NY",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "/images/sample2.png", // Real image from Unsplash
      rating: 4.8,
      reviewCount: 98,
      location: "New York, NY",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "/images/sample1.jpg", // Real image from Unsplash
      rating: 4.7,
      reviewCount: 112,
      location: "New York, NY",
      available: false,
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      specialty: "Dermatology",
      image: "/images/sample2.png", // Real image from Unsplash
      rating: 4.9,
      reviewCount: 87,
      location: "New York, NY",
      available: true,
    },
    {
      id: 5,
      name: "Dr. Jennifer Lee",
      specialty: "Ophthalmology",
      image: "/images/sample1.jpg", // Real image from Unsplash
      rating: 4.6,
      reviewCount: 76,
      location: "New York, NY",
      available: true,
    },
    {
      id: 6,
      name: "Dr. Robert Brown",
      specialty: "Orthopedics",
      image: "/images/sample2.png", // Real image from Unsplash
      rating: 4.8,
      reviewCount: 103,
      location: "New York, NY",
      available: true,
    },
  ];

  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Dermatology",
    "Ophthalmology",
    "Orthopedics",
    "Gynecology",
    "Urology",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

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

      {/* Search Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by doctor name or specialty"
                className="border p-2 pl-10"
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
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>Houston, TX</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 p-2">
              <span className="icon-search"></span> Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button className="text-blue-600 hover:text-blue-800">
                  Reset All
                </button>
              </div>

              {/* Filter Options */}
              <div className="border-t pt-4 pb-2">
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="available-now"
                      className="mr-2"
                    />
                    <label htmlFor="available-now">Available Today</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="available-tomorrow"
                      className="mr-2"
                    />
                    <label htmlFor="available-tomorrow">
                      Available Tomorrow
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="available-week"
                      className="mr-2"
                    />
                    <label htmlFor="available-week">Available This Week</label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 pb-2">
                <h3 className="font-semibold mb-3">Gender</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="gender-male" className="mr-2" />
                    <label htmlFor="gender-male">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="gender-female"
                      className="mr-2"
                    />
                    <label htmlFor="gender-female">Female</label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 pb-2">
                <h3 className="font-semibold mb-3">Experience</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="exp-0-5" className="mr-2" />
                    <label htmlFor="exp-0-5">0-5 years</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="exp-5-10" className="mr-2" />
                    <label htmlFor="exp-5-10">5-10 years</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="exp-10-plus" className="mr-2" />
                    <label htmlFor="exp-10-plus">10+ years</label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 pb-2">
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-4plus" className="mr-2" />
                    <label htmlFor="rating-4plus">4+ stars</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-5" className="mr-2" />
                    <label htmlFor="rating-5">5 stars</label>
                  </div>
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
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center text-yellow-500 mb-2">
                      <span className="icon-star"></span>
                      <span>{doctor.rating}</span> ({doctor.reviewCount}{" "}
                      reviews)
                    </div>
                    <p className="text-sm text-gray-600">{doctor.location}</p>
                    <button
                      className={`mt-4 p-2 text-white rounded-full ${
                        doctor.available ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {doctor.available ? "Available Now" : "Not Available"}
                    </button>
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
