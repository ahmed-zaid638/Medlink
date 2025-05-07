import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function DoctorProfile({ params }: { params: { id: string } }) {
  const doctor = {
    id: params.id,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/images/sample1.jpg",
    rating: 4.9,
    reviewCount: 124,
    experience: "15+ years",
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2005" },
      { degree: "Residency", institution: "Mayo Clinic", year: "2009" },
      {
        degree: "Fellowship",
        institution: "Johns Hopkins Hospital",
        year: "2011",
      },
    ],
    certifications: [
      "American Board of Internal Medicine",
      "American College of Cardiology",
      "Advanced Cardiac Life Support",
    ],
    languages: ["English", "Spanish", "French"],
    about:
      "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology, heart failure management, and cardiac rehabilitation.",
    specialties: [
      "Preventive Cardiology",
      "Heart Failure Management",
      "Cardiac Rehabilitation",
      "Echocardiography",
      "Stress Testing",
    ],
    location: {
      address: "123 Medical Center Dr, Suite 300",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 (800) 123-4567",
      email: "sarah.johnson@medicare.com",
      hours: [
        { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
        { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
        { day: "Sunday", hours: "Closed" },
      ],
    },
    reviews: [
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
    ],
  };

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
          <span className="text-gray-900">{doctor.name}</span>
        </div>
      </section>

      {/* Profile Content */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
          {/* Left: Image + Contact Info */}
          <aside className="w-full md:w-1/3 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-6 bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 h-5 w-5 mr-3 mt-1" />
                  <div>
                    <p>{doctor.location.address}</p>
                    <p>
                      {doctor.location.city}, {doctor.location.state}{" "}
                      {doctor.location.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 h-5 w-5 mr-3" />
                  <p>{doctor.location.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 h-5 w-5 mr-3" />
                  <p>{doctor.location.email}</p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-6 mb-3">Office Hours</h3>
              <ul className="space-y-2">
                {doctor.location.hours.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-medium">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right: Info */}
          <section className="w-full md:w-2/3 lg:w-3/4">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {doctor.name}
                </h1>
                <p className="text-xl text-blue-600">{doctor.specialty}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-bold">{doctor.rating}</span>
                  <span className="ml-1 text-gray-600">
                    ({doctor.reviewCount} reviews)
                  </span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Quick Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-semibold">{doctor.experience}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="font-semibold">
                    {doctor.education[0].institution}
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Award className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Certifications</p>
                  <p className="font-semibold">
                    {doctor.certifications.length} Board Certifications
                  </p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h2 className="text-xl font-bold mb-4">About {doctor.name}</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.about}</p>

              <h3 className="text-lg font-bold mt-6 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
