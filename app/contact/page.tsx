import React from "react";

function Page() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Have a question or need to schedule an appointment? Fill out the
              form below and well get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    placeholder="(123) 456-7890"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Schedule an Appointment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px] border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Hours */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Our emergency department is open 24 hours a day, 7 days a week
                  for urgent medical needs.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                  Emergency: +1 (800) 999-9999
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
