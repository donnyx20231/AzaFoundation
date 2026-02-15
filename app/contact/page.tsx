// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });

      const json = await res.json();
      if (res.ok) {
        setStatus('Thank you! Your message has been sent.');
        form.reset();
      } else {
        setStatus(json.message || 'Something went wrong.');
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block bg-pink-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            CONTACT US
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            WE LOVE MAKING THE WORLD A BETTER PLACE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            We'd love to hear from you. Whether you have a question about our services or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info - Orange Box */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-orange-400 rounded-full opacity-20 -mb-24 sm:-mb-32 -ml-24 sm:-ml-32"></div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-orange-600 rounded-full opacity-20 -mt-16 sm:-mt-24 -mr-16 sm:-mr-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">Contact Info</h2>

              <div className="space-y-8 sm:space-y-10">
                {/* Phone */}
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">CALL US</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">+234 803 226 9519</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">+234 814 000 1359</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">EMAIL US</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold break-words">azariahllcf@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 sm:p-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">VISIT US</h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                      No. 7 Ikot Uduak, Off MCC<br />
                      Calabar, Cross River State<br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

              {/* First Name & Last Name */}
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="FIRST NAME"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="LAST NAME"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="EMAIL"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="MESSAGE"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                SEND MESSAGE
              </button>

              {/* Status Message */}
              {status && (
                <p className="text-center text-base sm:text-lg font-medium text-gray-700 bg-orange-50 py-3 sm:py-4 px-4 sm:px-6 rounded-lg">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}