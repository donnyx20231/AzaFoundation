// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <hr className="my-4 sm:my-8 border-gray-300" />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Brand & Mission */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <span className="text-accent font-bold text-2xl sm:text-3xl">AZARIAH</span>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <Image
                  src="/images/Logo.png"
                  alt="Azariah Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Restoring dignity through compassionate healthcare, education, and community empowerment.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              © {new Date().getFullYear()} Azariah Life Care Foundation. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-6 sm:mb-6 lg:mb-8 text-accent">
              Quick Links
            </h3>
            <ul className="text-lg sm:text-xl md:text-2xl space-y-3 sm:space-y-4">
              <li>
                <Link href="/about" className="hover:underline hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/focus-areas" className="hover:underline hover:text-accent transition">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:underline hover:text-accent transition">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:underline hover:text-accent transition">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-6 text-accent">
              Contact Us
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl">
              <li className="flex items-start gap-3">
                <MapPin size={24} className="mt-1 text-accent flex-shrink-0 sm:w-7 sm:h-7" />
                <span className="leading-relaxed">
                  No. 7 Ikot Uduak, Off MCC, Calabar, Cross River State, Nigeria.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={22} className="mt-1 text-accent flex-shrink-0 sm:w-6 sm:h-6" />
                <a 
                  href="mailto:azariahllcf@gmail.com" 
                  className="hover:underline hover:text-accent transition break-words"
                >
                  azariahllcf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={22} className="mt-1 text-accent flex-shrink-0 sm:w-6 sm:h-6" />
                <div className="space-y-2">
                  <p>+234 803 226 9519</p>
                  <p>+234 814 000 1359</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-6 text-accent">
              Support Us
            </h3>
            <p className="mb-6 sm:mb-8 text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed">
              Your generous support helps us reach more vulnerable children, women, and communities.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex bg-pink-500 hover:bg-pink-600 hover:scale-105 hover:shadow-lg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-lg sm:text-xl transition-all duration-200 cursor-pointer"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}