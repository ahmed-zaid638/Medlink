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
  ChevronRight,
} from "lucide-react";
import data from "../data.json"; // adjust path based on structure

const specialties = [
  { id: 1, name: "أخصائي حساسية/مناعة" },
  { id: 2, name: "أخصائي تخدير" },
  { id: 3, name: "أخصائي قلب" },
  { id: 4, name: "أخصائي جلدية" },
  { id: 5, name: "أخصائي غدد صماء" },
  { id: 6, name: "أخصائي جهاز هضمي" },
  { id: 7, name: "طبيب عام" },
  { id: 8, name: "أخصائي طب كبار السن" },
  { id: 9, name: "أخصائي دم" },
  { id: 10, name: "أخصائي أمراض معدية" },
  { id: 11, name: "طبيب باطنية" },
  { id: 12, name: "أخصائي كلى" },
  { id: 13, name: "أخصائي أعصاب" },
  { id: 14, name: "أخصائي نساء وتوليد" },
  { id: 15, name: "أخصائي أورام" },
  { id: 16, name: "أخصائي عيون" },
  { id: 17, name: "جراح عظام" },
  { id: 18, name: "أخصائي أنف وأذن وحنجرة" },
  { id: 19, name: "أخصائي أمراض" },
  { id: 20, name: "أخصائي أطفال" },
  { id: 21, name: "جراح تجميل" },
  { id: 22, name: "أخصائي نفسية" },
  { id: 23, name: "أخصائي صدر" },
  { id: 24, name: "أخصائي أشعة" },
  { id: 25, name: "أخصائي روماتيزم" },
  { id: 26, name: "جراح عام" },
  { id: 27, name: "أخصائي مسالك بولية" },
];

export default function DoctorProfile({ params }: { params: { id: string } }) {
  const doctorData = data.find((doc) => doc.Id.toString() === params.id);

  if (!doctorData) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Doctor not found.
      </div>
    );
  }

  const doctor = {
    id: doctorData.Id,
    name: `Dr. ${doctorData.FirstName} ${doctorData.LastName}`,
    specialty:
      specialties.find((s) => s.id === doctorData.SpecialityId)?.name ||
      "غير معروف",
    image: `/images/doctors/${doctorData.Id}.jpg`,
    rating: doctorData.Rate || 4.0,
    reviewCount: Math.floor(Math.random() * 80) + 20,
    experience: `${Math.floor(Math.random() * 15) + 5}+ years`,
    education: [
      {
        degree: "MD",
        institution: "Faculty of Medicine - Cairo University",
        year: "2010",
      },
    ],
    certifications: ["Egyptian Medical Syndicate"],
    languages: ["العربية", "الإنجليزية"],
    about:
      "طبيب متخصص يتمتع بخبرة طويلة في تقديم الرعاية الطبية، مع التركيز على التشخيص الدقيق والتواصل الفعّال مع المرضى.",
    specialties: ["General", "Internal Medicine", "Diagnostics"],
    location: {
      address: "شارع التحرير، الدقي",
      city: "القاهرة",
      state: "القاهرة",
      zip: "12411",
      phone: "+20 100 123 4567",
      email: "doctor@example.com",
      hours: [
        { day: "السبت - الخميس", hours: "9:00 ص - 5:00 م" },
        { day: "الجمعة", hours: "مغلق" },
      ],
    },
    reviews: [],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-600 flex items-center">
          <Link href="/" className="hover:text-blue-600">
            الرئيسية
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/doctors" className="hover:text-blue-600">
            الأطباء
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-gray-900">{doctor.name}</span>
        </div>
      </section>

      {/* Profile Content */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
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
                معلومات التواصل
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

              <h3 className="font-semibold text-lg mt-6 mb-3">ساعات العمل</h3>
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

          {/* Info Section */}
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
                    ({doctor.reviewCount} تقييم)
                  </span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  احجز موعد
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">الخبرة</p>
                  <p className="font-semibold">{doctor.experience}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">التعليم</p>
                  <p className="font-semibold">
                    {doctor.education[0].institution}
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Award className="text-blue-600 h-8 w-8 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">الشهادات</p>
                  <p className="font-semibold">
                    {doctor.certifications.length} شهادة
                  </p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h2 className="text-xl font-bold mb-4">عن الدكتور</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.about}</p>

              <h3 className="text-lg font-bold mt-6 mb-3">اللغات</h3>
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
